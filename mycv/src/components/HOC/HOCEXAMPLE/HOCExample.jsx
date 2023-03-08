import { AppRoutes } from "../../../common/AppRoutes";

// export const HOCExample1 = ({Component}) => {
//     ///logic
//     const RoutesArr = [
//         {
//             title: 'Home',
//             route: AppRoutes.MAIN
//         },
//         {
//             title: 'Taxi',
//             route: AppRoutes.ROUTE_OKS
//         },
//     ]
//     return <Component arr={RoutesArr}/>
// }


export const HOCExample2 = ({children}) => {

    return (
        <ol>
            {children}
        </ol>
    )

}
