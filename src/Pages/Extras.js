import React from "react"
import "../App.css"
import cheesepizza from "../Images/cheesepizza.jpg"
import { Link } from "react-router-dom";
import Nav2 from "../Component/Nav2"


function Extras(){
    return(
        <div>
    <nav className="a:link">
        <Nav2 />
      </nav>
      <div  >  
      <div className="box">  
            <img src={cheesepizza}/>
            <p className="button">Add to cart</p>
            </div>

            <div className="box">  
            <img src={cheesepizza}/>
            <p className="button">Add to cart</p>
            </div>
          
            <div className="box">  
            <img src={cheesepizza}/>
            <p className="button">Add to cart</p>
            </div>
           
           
            
        </div>
            
           
      </div>
        
    )
}

export default Extras;