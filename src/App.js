import React from 'react';
import Home from "./Pages/Home.js";
import Nav from "./Component/Nav.js";
import Menu from "./Pages/Menu.js"
import Specials from "./Pages/Specials.js"
import Nav2 from "./Component/Nav2.js"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/menu" component={Menu}/>
            <Route path="/specials" component={Specials}/>
            
            <Route path="/" component={Home}/>
        </Switch>
        
      </div>
    </Router>
    );
}


