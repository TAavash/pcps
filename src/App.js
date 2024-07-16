import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CounterFunction from "./components/counter/counter_function";
import NavbarComponent from "./components/Navbar/NavbarComponent";
import AvrilaComponent from "./components/props/AvrilaComponent";
import GreetRamComponent from "./components/props/greetRamComponent";
import HomeComponent from "./components/Home/HomeComponent";
import AboutComponent from "./components/About/AboutComponent";
import ShopComponent from "./components/Shop/ShopComponent";
import ProductComponent from "./components/productComponent/ProductComponent";

function App() {
  return (
    <>
      {/* <NavbarComponent/> */}
      {/* <ClassComponent /> */}
      {/* <Counter/> */}
      {/* <CounterFunction/> */}
      {/* <GreetRamComponent/> */}
      {/* <AvrilaComponent/> */}

      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<HomeComponent />} />
          <Route path="/about" element={<AboutComponent/>} />
          <Route path="/shop" element={<ShopComponent />} />
          <Route path="/product" element={<ProductComponent/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
