import React, {useState} from 'react';
import Home from "./Pages/Home.js";
import Nav from "./Component/Nav.js";
import Menu from "./Pages/Menu.js"
import Specials from "./Pages/Specials.js"
import Pizza from "./Pages/Pizza.js"
import Sandwiches from './Pages/Sandwiches.js';
import Sides from './Pages/Sides.js';
import Drinks from './Pages/Drinks.js';
import Extras from "./Pages/Extras.js";
import Pasta from "./Pages/Pasta.js";
import Cart from "./Pages/Cart.js"
import { Provider } from 'react-redux' //Allows the code to connect values between the pages
import store from './store.js' //Stores the items when the action AddTo is triggered
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



export default function App() {
  
  return (
    <Provider store={store}> {/*Passing values so that items are stored and connects throughout the website*/}
        <Router>
      <div className="App">
        <Nav />
        <Switch>
            <Route path="/menu" component={Menu}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/specials" component={Specials}/>
            <Route path="/pizza" component={Pizza}/>
            <Route path="/pasta" component={Pasta}/>
            <Route path="/sandwiches" component={Sandwiches}/>
            <Route path="/sides" component={Sides}/>
            <Route path="/drinks" component={Drinks}/>
            <Route path="/extras" component={Extras}/>
            <Route path="/" component={Home}/>
        </Switch>
        
      </div>
    </Router>
    </Provider>
  
    );
}


