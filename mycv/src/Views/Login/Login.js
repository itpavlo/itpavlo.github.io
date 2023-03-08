import { useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";

const Login = () => {
  const { userID } = useParams()
    console.log(userID)
    const navigate = useNavigate();

    useEffect(()=>{
        userID !== '13' && navigate(AppRoutes.NOT_FOUND)
    }, [])

    return (
        <h1>USER ID is -> {userID}</h1>
    )
}

export default Login
