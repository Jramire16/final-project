import React, { useEffect } from "react"
import "../App.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import { getNumbers } from "./getAction"


function Nav(props){
    const navStyle = {
        color: 'white'
        
    };
    //useEffect runs after everything is rendered, and this case is looking into the array since we are keeping count of the cart items.
    useEffect(() =>{
        getNumbers();
    }, [])

    return(
        
        <nav className="a:link">
        <Link className="nav" style={navStyle} to="/home">
            <h1>SkyPizza</h1>
        </Link>

        <Link className="nav" style={navStyle} to="/login">
            <h1>Log In</h1>
        </Link>



        <ul className="nav-links">
            <Link className="nav-links" to="/Menu">
                <li>Menu</li>
            </Link>
            <Link className="nav-links" to="/Specials">
                <li>Specials</li>
            </Link>
            <Link className="nav-links" to="/Cart">
                <li><ion-icon name="cart-outline"></ion-icon><span>{props.cartProps.cartNumber}</span></li>
            </Link>
            
                  
        </ul>
        </nav>
        
      
      
    )
}

const mapStateToProps = state =>({
    cartProps: state.cartState
})
//Giving the the cart in the Navbar the ability to count the items visibly on screen
export default connect(mapStateToProps, { getNumbers })(Nav)
