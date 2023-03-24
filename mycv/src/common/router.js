import { createBrowserRouter, Outlet } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";

import Navbar from "../components/Navbar/Navbar";
import { PrivateRoute, PublicRoute } from "../components/HOC/RoutesHOCs/ROutesHOCs";
import Login from "../Views/Login/Login";
import MentorContainerHOC from "../Views/Mentor/Mentor.HOC";
import Mentor from "../Views/Mentor/Mentor";
import Layout from '../components/Students/Layout/Layout';
import students from '../components/Students/Layout/students';
import AxiosComp from "../Views/Mentor/Axios";
import AxiosRedux from "../Views/Mentor/AxiosRedux";
import REST from "../Views/Mentor/components/REST.tsx";
import Container from "../Views/Mentor/components/REST.tsx";

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    );
};
export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <h1>NOT FOUND</h1>,
        children: [
            {
                path: AppRoutes.MAIN,
                element: <App/>,
                errorElement: <h1>NOT FOUND</h1>,
            },
            {
                path: AppRoutes.USER_PROFILE,
                element: <Login />
            },
            {
                path: AppRoutes.IHOR,
                element: <>   <Navbar /><h1>Ihor</h1></>,
            },
            {
                path: AppRoutes.LOGIN,
                element: <PublicRoute Component={Login} />,
            },
            {
                path: AppRoutes.IHOR,
                element: <h1>Ihor</h1>,
                errorElement: <h1>NOT FOUND</h1>,
            },
            {
                path: AppRoutes.NOT_FOUND,
                element: <h1>NOT FOUND</h1>,
            },
            {
                path: AppRoutes.MENTOR,
                // element: <MentorContainerHOC Component={Mentor}/>,
                element: <PrivateRoute Component={MentorContainerHOC} childComponent={Container}/>,
            },
            {
                path: AppRoutes.STUDENTS,
                element: <Layout/>,
                children: students
            }
        ]
    }
]);
