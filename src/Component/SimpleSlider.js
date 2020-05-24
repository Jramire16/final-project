import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import cheesepizza from "../Images/cheesepizza.jpg"
import pepperonipizza from "../Images/pepperonipizza.jpg"
import sausagepizza from "../Images/sausagepizza.jpg"
import hawaiianpizza from "../Images/hawaiianpizza.jpg"

const SimpleSlider = () => (
  
    <Slider dots>

      <div className="banner">
      <img src={cheesepizza}/>
      </div>
      <div className="banner">
      <img src={pepperonipizza}/>
      </div>
      <div className="banner">
      <img src={sausagepizza}/>
      </div>
      <div className="banner">
        <img src={hawaiianpizza}/>
      </div>

    </Slider>
  );


  
  export default SimpleSlider;

