import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import OksanaComponent from "../components/Oksana/OksanaComponent";
import App from "../App";

import RouteComponent, {
    CheckAccess,
    RouteAdminComponent,
    RouteLoginComponent,
    RouteUserComponent
} from '../components/Oksana/RouteComponent';
import Lviv_milyavskiy from "../components/milyavskiyV/milyavskiy";
import Navbar from "../components/Navbar/Navbar";
import { PrivateRoute, PublicRoute } from "../components/HOC/RoutesHOCs/ROutesHOCs";
import Login from "../Views/Login/Login";
import MentorContainerHOC from "../Views/Mentor/Mentor.HOC";
import Mentor from "../Views/Mentor/Mentor";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <App/>,
        errorElement: <h1>NOT FOUND</h1>,
        children: [
            {
                path: AppRoutes.OKS,
                element: <OksanaComponent/>,
                errorElement: <h1>NOT FOUND</h1>,
            },
            {
                path: AppRoutes.ROUTE_OKS,
                element: <RouteComponent/>,
                errorElement: <h1>NOT FOUND</h1>,
                children: [
                    {
                        path: AppRoutes.ROUTE_OKS_LOGIN,
                        element: <RouteLoginComponent/>,
                    },
                    {
                        path: AppRoutes.ROUTE_OKS_USER,
                        element: <CheckAccess
                          permissions={['user', 'admin']}
                          Component={RouteUserComponent}
                        />,
                    },
                    {
                        path: AppRoutes.ROUTE_OKS_ADMIN,
                        element: <CheckAccess
                          permissions={['admin']}
                          Component={RouteAdminComponent}
                        />,
                    },
                ]
            },
            {
                path: AppRoutes.OKS,
                element: <OksanaComponent/>,
            },
            {
                path: AppRoutes.ROUTE_OKS,
                element: <PrivateRoute Component={RouteComponent} />,
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
        ]
    },
    {
        path: AppRoutes.NOT_FOUND,
        element: <h1>NOT FOUND</h1>,
    },
    {
        path: AppRoutes.MENTOR,
        // element: <MentorContainerHOC Component={Mentor}/>,
        element: <PrivateRoute Component={MentorContainerHOC} childComponent={Mentor}/>,
    },

]);
