import style from './RouteComponent.module.scss'
import Navbar from "../Navbar/Navbar";
import { HOCExample1 } from "../HOC/HOCEXAMPLE/HOCExample";

const RouteComponent = () => {
  return (
      <>
          <Navbar />
          <div className={style.container}>
              <img src="https://i0.wp.com/www.kulemet.com/wp-content/uploads/2019/08/taksi.jpg?fit=632%2C474&ssl=1"/>
          </div>
      </>

  )
}

export default RouteComponent
