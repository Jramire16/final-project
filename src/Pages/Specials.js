import React from "react"
import "../App.css"
import cheesepizza from "../Images/cheesepizza.jpg"

function Specials(){
    return(
        <div>
        <div >  
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
export default Specials;