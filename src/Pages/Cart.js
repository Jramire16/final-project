import React, { Fragment } from "react"
import "../App.css"
import { connect } from 'react-redux'
import { productAmount, removeProduct } from '../Component/productAmount'
import cheesepizza from "../Images/cheesepizza.jpg"
import pepperonipizza from "../Images/pepperonipizza.jpg"
import sausagepizza from "../Images/sausagepizza.jpg"
import hawaiianpizza from "../Images/hawaiianpizza.jpg"



function Cart({cartProps, productAmount, removeProduct}){
    console.log(cartProps);
    
    let productsInCart =[];//The items held in this array

    Object.keys(cartProps.products).forEach(function(item){
        console.log(item)
        console.log(cartProps.products[item].inCart)
        if(cartProps.products[item].inCart){
            productsInCart.push(cartProps.products[item])
        }
        console.log(productsInCart)
    })//This allows the cart to pick up the items held by the reducer

    //Finds the items by the assigned name so the fragment can find the products
    const productImages = (products) =>{
        if(products.itemName === "cheesePizza"){
            return cheesepizza;
        }
        else if(products.itemName === "pepperoniPizza")
        return pepperonipizza;

        else if(products.itemName ==="sausagePizza")
        return sausagepizza;

        else if(products.itemName === "hawaiianPizza")
        return hawaiianpizza;

    }
  

//This cycles through the array containing all of the images, and from that connects the prices
    productsInCart = productsInCart.map((products, index) => {
        return(
            <Fragment key={index}>
            <div className="plate">
                <div className="box" ><img src={productImages(products)}/>
                <span>{products.name}</span>
              
                </div>
                
                
                <div >
                <ion-icon className="plate" onClick={() => productAmount("decrease", products.itemName)} name="arrow-down-outline"></ion-icon>
                <span className="minibox"> {products.numbers} </span>
                <ion-icon onClick={() => productAmount("increase", products.itemName)} name="arrow-up-outline"></ion-icon>
                  <p onClick={() => removeProduct(products.itemName)}>Remove</p>
                </div>


                <div className="total">
                Price: $<span>{products.numbers * products.price}</span>
                </div>
                
               
            </div>
                
            </Fragment>
        )
    })


    return(
        <div className="plate">
            {productsInCart}
           
        </div>
    )
}
const mapStateToProps = state => ({
        cartProps: state.cartState
    })




export default connect(mapStateToProps, { productAmount, removeProduct })(Cart)