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

//Всі роути студентів додаються тільки тут!!!
// Для кожного студента обовʼязкові опції name i children, де name - це імʼя студента, а children - це масив завдань
// Обов'язкові елементи title, path, element не змінювати назву !!!!

export default [
  {
    name: 'Oksana',
    children: [
      {
        title: 'task one',
        path: AppRoutes.OKS + '/task_one',
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
      }
    ]
  },
  {
    name: 'MilyavskiyV',
    children: [
      {
        title: 'task one',
        path: AppRoutes.MILYAVSKIY + '/task_one',
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
