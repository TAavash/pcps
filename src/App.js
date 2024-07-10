import "./App.css";
import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Counter from "./counter";
import CounterFunctional from "./counter_functional";
import Index from "./components";
// import GreetComponent from "./components/props/greetComponent";
import { GreetRamComponent } from "./components/props/GreetRamComponent";
import { GreetRuchiComponent } from "./components/props/greetRuchiComponent";
import Navbar from "./components/Navbar/navbar";

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
        <Navbar/>
       <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/counter_functional" element={<CounterFunctional />} />
        <Route path="/greet_ram" element={<GreetRamComponent />} />
        <Route path="/greet_ruchi" element={<GreetRuchiComponent />} />
       </Routes>
 
      </div>
      </Router>
    );
  }
}
export default App;