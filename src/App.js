import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Counter from "./counter";
import CounterFunctional from "./counter_functional";
import Index from "./components";
// import GreetComponent from "./components/props/greetComponent";
import { GreetRamComponent } from "./components/props/GreetRamComponent";
import { GreetRuchiComponent } from "./components/props/greetRuchiComponent";
import Navbar from "./components/Navbar/navbar";
import AboutComponent from "./components/About/aboutComponent";
import HomeComponent from "./components/Home/homeComponent";
import ShopComponent from "./components/Shop/shopComponent";

class App extends Component {
  render() {
    return (
      // <>
      // <Navbar/>
      //   <Counter/>
      //  <CounterFunctional/>
      //  <Index/>
      //  <GreetRamComponent/>
      //  <GreetRuchiComponent/>
      //  </>

      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomeComponent />} />
            <Route path="/about" element={<AboutComponent />} />
            <Route path="/shop" element={<ShopComponent />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
export default App;
