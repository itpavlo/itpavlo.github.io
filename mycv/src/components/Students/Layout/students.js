import { AppRoutes } from '../../../common/AppRoutes';
import OksanaComponent from '../Oksana/OksanaComponent';
import RouteComponent, {
  CheckAccess,
  RouteAdminComponent,
  RouteLoginComponent,
  RouteUserComponent
} from '../Oksana/RouteComponent';
import ClassComponent from '../milyavskiyV/ClassComponent';
import Lviv_milyavskiy from '../milyavskiyV/milyavskiy';
import Coment from '../IvanMakow/IvanMakowComponent';
import RegisterForm from '../Oksana/RegisterForm';
import LoginForm from '../Oksana/LoginForm';
import AxiosRoute from '../Oksana/Axios';


//Всі роути студентів додаються тільки тут!!!
// Для кожного студента обовʼязкові опції name i children, де name - це імʼя студента, а children - це масив завдань
// Обов'язкові елементи title, path, element не змінювати назву !!!!

export default [
  {
    name: 'Oksana',
    children: [
      {
        title: 'task one',
        path: AppRoutes.OKS + AppRoutes.TASK_ONE,
        element: <OksanaComponent/>,
      },
      {
        title: 'task two',
        path: AppRoutes.OKS + '/task_two',
        element: <RouteComponent/>,
        children: [
          {
            path: AppRoutes.OKS + '/task_two/login',
            element: <RouteLoginComponent/>,
          },
          {
            path: AppRoutes.OKS + '/task_two/user',
            element: <CheckAccess
              permissions={['user', 'admin']}
              Component={RouteUserComponent}
            />,
          },
          {
            path: AppRoutes.OKS + '/task_two/admin',
            element: <CheckAccess
              permissions={['admin']}
              Component={RouteAdminComponent}
            />,
          },
        ]
      },
      {
        title: 'register form',
        path: AppRoutes.OKS + '/register',
        element: <RegisterForm/>
      },
      {
        title: 'login form',
        path: AppRoutes.OKS + '/login',
        element: <LoginForm/>
      },
      {
        title: 'axios route',
        path: AppRoutes.OKS + '/axios_route',
        element: <AxiosRoute/>
      }
    ]
  },
  {
    name: 'MilyavskiyV',
    children: [
      {
        title: 'task one',
        path: AppRoutes.MILYAVSKIY + AppRoutes.TASK_ONE,
        element: <ClassComponent count={0} />
      },
      {
        title: 'task two',
        path: AppRoutes.MILYAVSKIY + '/task_two',
        element: <Lviv_milyavskiy/>
      }
    ]
  },
  {
    name: 'IvanMakov',
    children: [
      {
        title: 'task one',
        path: AppRoutes.IVANMAKOV + '/task_one',
        element: <Coment/>
      }
    ]
  }
]
