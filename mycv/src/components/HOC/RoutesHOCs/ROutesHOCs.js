import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../common/AppRoutes";
export const PrivateRoute = ({Component, ...rest })=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.id ? <Component Component={rest?.childComponent}/> : <Navigate to={AppRoutes.IHOR}/>
}

export const PublicRoute = ({Component})=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.id ?  <Navigate to={AppRoutes.IHOR}/> : <Component />
}
