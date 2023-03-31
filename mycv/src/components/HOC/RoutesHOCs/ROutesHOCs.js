import { Navigate } from "react-router-dom";
import { AppRoutes } from "../../../common/AppRoutes";
import FBFunctions from "../../../Views/Mentor/components/FIREBASE/ACtions/FBFunctions";
import FBFunctionsHOC from "../../../Views/Mentor/components/FIREBASE/ACtions/FBFunctionsHOC";
export const PrivateRoute = ({Component, ...rest })=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.uid ? <Component Component={rest?.childComponent}/> : <Navigate to={AppRoutes.MENTOR_LOGIN}/>
}

export const PrivateMentorRoute = ({Component, ...rest })=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.uid ? <Component /> : <Navigate to={AppRoutes.MENTOR_LOGIN}/>
}
export const PrivateRouteForHOC = ({HOC, Component })=> {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.uid ? <HOC  Component={Component}/> : <Navigate to={AppRoutes.MENTOR_LOGIN}/>
}

export const PublicRoute = ({Component})=> {

    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return authUser?.id ?  <Navigate to={AppRoutes.MAIN}/> : <Component />
}
