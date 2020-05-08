import React from "react"
import "../App.css"
import cheesepizza from "../Images/cheesepizza.jpg"
import { Link } from "react-router-dom";



function Sandwiches(){
    return(
        <div>
                <nav className="a:link">
        <ul className="nav2">
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
      <div className="box">  
        

            </div>

           
      </div>
        
    )
}

export default Sandwiches;