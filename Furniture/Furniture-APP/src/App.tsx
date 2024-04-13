import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./components/FirstPage";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Register from "./components/Register";
import Furnitures from "./components/Furnitures";
import Furt1 from "./components/Furt1";
import Furt2 from "./components/Furt2";
import Furt3 from "./components/Furt3";
import Furt4 from "./components/Furt4";
import Furt5 from "./components/Furt5";
import Booking from "./components/Booking";
function App() {
  return (
    <div>
      <NavBar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/FirstPage" element={<FirstPage />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Furnitures" element={<Furnitures />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/furt1" element={<Furt1 />}></Route>
            <Route path="/furt2" element={<Furt2 />}></Route>
            <Route path="/furt3" element={<Furt3 />}></Route>
            <Route path="/furt4" element={<Furt4 />}></Route>
            <Route path="/furt5" element={<Furt5 />}></Route>
            <Route path="/booking" element={<Booking />}></Route>

          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}
export default App;
