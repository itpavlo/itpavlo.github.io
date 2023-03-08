import Navbar from "./components/Navbar/Navbar";
import { Outlet} from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./common/AppRoutes";
import Lviv_milyavskiy from "./components/milyavskiyV/milyavskiy"
import { HOCExample1, HOCExample2 } from "./components/HOC/HOCEXAMPLE/HOCExample";
import { useEffect } from "react";



function App() {
    console.log('APP')






    useEffect(()=>{
        const user = JSON.parse(localStorage.getItem('authUser'))
        console.log(user)
        user === null && localStorage.setItem('authUser', JSON.stringify(
            {
                name: 'AI',
                id: "userID"
            }
        ))
    }, [])


  return (
    <div>
        <Navbar />
        {/*<HOCExample1 Component={Navbar}/>*/}
        <Lviv_milyavskiy/>
        <HOCExample2>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </HOCExample2>
    </div>
  );
}

export default App;
