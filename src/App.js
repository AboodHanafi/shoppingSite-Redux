import "./App.css";
import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Navbar from "./component/navBar";
import Sidebar from "./component/sideBar";
import Trucks from "./pages/trucks";
import Buses from "./pages/buses";
import Vans from "./pages/vans";
import Cars from "./pages/cars";
import Motors from "./pages/motors";

function App() {
  return (
    <>
      <div className="App">
        <Sidebar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/trucks" element={<Trucks />} />
          <Route exact path="/buses" element={<Buses />} />
          <Route exact path="/vans" element={<Vans />} />
          <Route exact path="/cars" element={<Cars />} />
          <Route exact path="/motors" element={<Motors />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
