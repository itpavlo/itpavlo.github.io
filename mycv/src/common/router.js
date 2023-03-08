import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import OksanaComponent from "../components/Oksana/OksanaComponent";
import App from "../App";
import RouteComponent from '../components/Oksana/RouteComponent';
import Lviv_milyavskiy from "../components/milyavskiyV/milyavskiy";
import Navbar from "../components/Navbar/Navbar";
import { PrivateRoute, PublicRoute } from "../components/HOC/RoutesHOCs/ROutesHOCs";
import Login from "../Views/Login/Login";

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <App/>,
        errorElement: <h1>NOT FOUND</h1>,
    },
    {
        path: AppRoutes.OKS,
        element: <OksanaComponent/>,
    },
    {
        path: AppRoutes.ROUTE_OKS,
        element: <PrivateRoute Component={RouteComponent} />,
        children: []
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
        path: AppRoutes.NOT_FOUND,
        element: <h1>NOT FOUND</h1>,
    },

]);
