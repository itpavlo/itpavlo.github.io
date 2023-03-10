import styles from './Navbar.module.scss'
import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../common/AppRoutes";

const Navbar = () => {
    return <div className={styles.container}>
        <Link to={AppRoutes.STUDENTS}>STUDENTS</Link>
        <Link to={AppRoutes.MENTOR}>MENTOR</Link>
    </div>
}

export default Navbar;
