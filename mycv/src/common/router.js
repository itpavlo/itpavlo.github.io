import { createBrowserRouter, Outlet } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import App from "../App";

import Navbar from "../components/Navbar/Navbar";
import {
    PrivateMentorRoute,
    PrivateRoute,
    PrivateRouteForHOC,
    PublicRoute
} from "../components/HOC/RoutesHOCs/ROutesHOCs";
import Login from "../Views/Login/Login";
import MentorContainerHOC from "../Views/Mentor/Mentor.HOC";
import Mentor from "../Views/Mentor/Mentor";
import Layout from '../components/Students/Layout/Layout';
import students from '../components/Students/Layout/students';
import AxiosComp from "../Views/Mentor/Axios";
import AxiosRedux from "../Views/Mentor/AxiosRedux";
import REST from "../Views/Mentor/components/REST.tsx";
import Container from "../Views/Mentor/components/REST.tsx";
import FirebaseComponent from "../Views/Mentor/components/FIREBASE/FirebaseComponent";
import SignUP from "../Views/Mentor/components/FIREBASE/SignUP/SignUP";
import SignIN from "../Views/Mentor/components/FIREBASE/SignUP/SignIN";
import FBFunctions from "../Views/Mentor/components/FIREBASE/ACtions/FBFunctions";
import FBFunctionsHOC from "../Views/Mentor/components/FIREBASE/ACtions/FBFunctionsHOC";

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
                element: <PrivateRouteForHOC  HOC={FBFunctionsHOC} Component={FBFunctions}/>
            },
            // {
            //     path: AppRoutes.IHOR,
            //     element: <PrivateMentorRoute Component={FBFunctions} />,
            //     errorElement: <h1>NOT FOUND</h1>,
            // },
            {
                path: AppRoutes.NOT_FOUND,
                element: <h1>NOT FOUND</h1>,
            },
            {
                path: AppRoutes.MENTOR,
                element: <MentorContainerHOC Component={FirebaseComponent}/>,
            },
            {
                path: AppRoutes.MENTOR_SIGN_UP,
                element: <PublicRoute Component={SignUP} />,
            },
            {
                path: AppRoutes.MENTOR_LOGIN,
                element: <PublicRoute Component={SignIN} />,
            },

            {
                path: AppRoutes.STUDENTS,
                element: <Layout/>,
                children: students
            }
        ]
    }
]);
