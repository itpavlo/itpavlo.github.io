import { createBrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import OksanaComponent from "../components/Oksana/OksanaComponent";
import App from "../App";

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
                path: AppRoutes.IHOR,
                element: <h1>Ihor</h1>,
                errorElement: <h1>NOT FOUND</h1>,
            },
        ]
    },
]);
