import styles from './Navbar.module.scss'
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";

const Navbar = () => {
    return <div className={styles.container}>
        <Link to={AppRoutes.MENTOR}>MENTOR</Link>
        <Link to={AppRoutes.OKS}>Oksana</Link>
        <Link to={AppRoutes.ROUTE_OKS}>Oksana_Route</Link>
    </div>
}

export default Navbar;
