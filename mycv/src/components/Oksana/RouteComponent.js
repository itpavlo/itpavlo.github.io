import { Link, Outlet, useNavigate } from 'react-router-dom';
import style from './RouteComponent.module.scss'
import { AppRoutes } from '../../common/AppRoutes';

export const RouteLoginComponent = () => {
  const navigate = useNavigate()
  const remember = (type) => localStorage.setItem('permission', type)
  const logout = () => {
    localStorage.removeItem('permission')
    navigate(AppRoutes.ROUTE_OKS)
  }
  return (
    <div>
      <button onClick={() => remember('user')}>
        Made User
      </button>
      <button onClick={() => remember('admin')}>
        Made Admin
      </button>
      <button onClick={() => logout()}>
        Logout
      </button>
    </div>
  )
}

export const RouteUserComponent = () => {
  return (
    <div>
      USER PAGE
    </div>
  )
}

export const RouteAdminComponent = () => {
  return (
    <div>
      ADMIN PAGE
    </div>
  )
}

export const CheckAccess = ({permissions, Component }) => {
  const currentPermission = localStorage.getItem('permission')
  return currentPermission && permissions.includes(currentPermission) ? <Component/> : (
    <div>
      ACCESS DENIED!!! Your permission is <strong>{currentPermission ?? <span>N/A</span>}</strong>
    </div>
  )
}


const RouteComponent = () => {
  return (
    <div className={style.container}>
      <div className={style.navigation}>
        <Link to={AppRoutes.ROUTE_OKS_LOGIN}>
          Login
        </Link>
        <Link to={AppRoutes.ROUTE_OKS_USER}>
          User
        </Link>
        <Link to={AppRoutes.ROUTE_OKS_ADMIN}>
          Admin
        </Link>
      </div>
      <div className={style.content}>
        <Outlet/>
      </div>
    </div>
  )
}

export default RouteComponent
