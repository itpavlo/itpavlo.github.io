import Navbar from '../../Navbar/Navbar';
import Sidebar from './Sidebar';
import { Outlet} from "react-router-dom";
import styles from './Layout.module.scss'

const Layout = () => {
  return (
    <div>
      <Navbar/>
      <div className={styles.container}>
         <Sidebar/>
          <div className={styles.content}>
            <Outlet/>
          </div>
        </div>
    </div>
  )
}

export default Layout
