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

export const router = createBrowserRouter([
    {
        path: AppRoutes.MAIN,
        element: <App />,
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
                path: AppRoutes.IHOR,
                element: <h1>Ihor</h1>,
                errorElement: <h1>NOT FOUND</h1>,
            },
        ]
    },
]);
