import Navbar from "./components/Navbar/Navbar";
import { Outlet} from "react-router-dom";
import "./index.css";
import { AppRoutes } from "./common/AppRoutes";



function App() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  );
}

export default App;


