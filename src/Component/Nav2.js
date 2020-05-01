import React from "react"
import "../App.css";
import { Link } from "react-router-dom";





function Nav2() {
    return(    
     <nav className="a:link">
        <ul className="home">
            <Link to="/Pizza">
                <h1>Pizza</h1>
            </Link> 
            <Link to="/Sandwiches">
                <h1>Sandwiches</h1>
            </Link>                
            <Link to="/Pasta">
                <h1>Pasta</h1>
            </Link>
            <Link to="/Sides">
                <h1>Sides</h1>
            </Link>
            <Link to="/Drinks">
                <h1>Drinks</h1>
            </Link>
            <Link to="/Extras">
                 <h1>Extras</h1>
            </Link>        
        </ul>
      </nav>
    
    )



}

export default Nav2;