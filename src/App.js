import React from 'react';
import Home from "./Pages/Home.js";
import Nav from "./Component/Nav.js";
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
            
            <Route path="/" component={Home}/>
        </Switch>
        
      </div>
    </Router>
    );
}


