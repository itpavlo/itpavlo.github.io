import Navbar from "./components/Navbar/Navbar";
import { Outlet} from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./common/AppRoutes";
import Lviv_milyavskiy from "./components/milyavskiyV/milyavskiy"



function App() {
  return (
    <div>
        <Navbar />
        <Outlet />
        <Lviv_milyavskiy/>
    </div>
  );
}

export default App;


