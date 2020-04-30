import React from "react"
import "../App.css"
import { Link } from "react-router-dom";


function Nav(){
    const navStyle = {
        color: 'white'
        
    };

    return(
        
            <nav className="a:link">
        <Link className="nav" style={navStyle} to="/home">
            <h1>SkyPizza</h1>
        </Link>     
        <ul className="nav-links">
            <Link className="nav-links" to="/Menu">
                <li>Menu</li>
            </Link>
            <Link className="nav-links" to="/Specials">
                <li>Specials</li>
            </Link>
            <Link className="nav-links" to="/Cart">
                <li>Cart</li>
            </Link>
            
                  
        </ul>
        </nav>
        
      
      
    )
}

export default Nav;
