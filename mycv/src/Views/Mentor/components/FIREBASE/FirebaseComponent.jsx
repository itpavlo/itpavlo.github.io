import {Link, Outlet} from "react-router-dom";
import {AppRoutes} from "../../../../common/AppRoutes";

const FirebaseComponent = () => {
    const authUser = JSON.parse(localStorage.getItem('authUser'))
    return(
        <div>
            <h1>FirebaseComponent</h1>
            <Link to={AppRoutes.MENTOR_LOGIN}>login</Link>
            <Link to={`/users/${authUser?.uid}`}>userPage</Link>
            <Outlet />
        </div>
    )
}

export default FirebaseComponent;
