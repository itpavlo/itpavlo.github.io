import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../common/AppRoutes";
export const PrivateRoute = ({Component})=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    console.log('authUser', authUser)
    return authUser?.id ? <Component /> : <Navigate to={AppRoutes.IHOR}/>
}

export const PublicRoute = ({Component})=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    console.log('authUser', authUser)
    return authUser?.id ?  <Navigate to={AppRoutes.IHOR}/> : <Component />
}
