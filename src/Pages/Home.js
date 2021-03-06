import React, { Component, useState} from "react"
import "../App.css";
import cheesepizza from "../Images/cheesepizza.jpg"
import pepperonipizza from "../Images/pepperonipizza.jpg"
import sausagepizza from "../Images/sausagepizza.jpg"
import hawaiianpizza from "../Images/hawaiianpizza.jpg"
import SimpleSlider from "../Component/SimpleSlider";
import Nav2 from "../Component/Nav2"
import { connect } from 'react-redux' //Connects the items between pages
import { addTo } from '../Component/AddTo' //Adds items


const Home = (props) =>{
  console.log(props)
    return(   
        
        <div>
         <nav className="a:link">
                <Nav2 className="banner"/>
        </nav>
      <div>
            <SimpleSlider />

      </div>
      <div  >  
      
            <div className="box">  
            <img src={cheesepizza}/>
            <span>$12</span>
            <a onClick={() => props.addTo('cheesepizza')} >
            <p className="button">Add to cart</p>
            </a>
            </div>

            <div className="box">  
            <img src={pepperonipizza}/>
            <span>$15</span>
            <a onClick={() => props.addTo('pepperonipizza')} >
            <p className="button">Add to cart</p>
            </a>
            </div>

            <div className="box">  
            <img src={sausagepizza}/>
            <span>$15</span>
            <a onClick={() => props.addTo('sausagepizza')} >
            <p className="button">Add to cart</p>
            </a>
            </div>

            <div className="box">  
            <img src={hawaiianpizza}/>
            <span>$17</span>
            <a onClick={() => props.addTo('hawaiianpizza')} >
            <p className="button">Add to cart</p>
            </a>
            </div>
            
            <div className="box">  
            <img src={cheesepizza}/>
            <span>$15</span>
            <a href="#" >
            <p className="button">Add to cart</p>
            </a>
            </div>

            <div className="box">  
            <img src={cheesepizza}/>
            <span>$15</span>
            <a href="#" >
            <p className="button">Add to cart</p>
            </a>
            </div>
        </div>
            
           
      </div>
    )
}

export default connect(null, { addTo })(Home); //Connects the page and cart items that are added into the nav
