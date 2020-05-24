import React from "react"
import "../App.css";
import { Link } from "react-router-dom";





function Nav2() {
    const navStyle = {
        color: 'black'
    }

    return(    
     <nav className="a:link">
       <ul className="nav2">
            <Link to="/Pizza" style={navStyle}>
                <h1>Pizza</h1>
            </Link> 
            <Link to="/Sandwiches" style={navStyle}>
                <h1>Sandwiches</h1>
            </Link>                
            <Link to="/Pasta" style={navStyle}>
                <h1>Pasta</h1>
            </Link>
            <Link to="/Sides" style={navStyle}>
                <h1>Sides</h1>
            </Link>
            <Link to="/Drinks" style={navStyle}>
                <h1>Drinks</h1>
            </Link>
            <Link to="/Extras" style={navStyle}>
                 <h1>Extras</h1>
            </Link>        
        </ul>
      </nav>
    
    )



}

export default Nav2;