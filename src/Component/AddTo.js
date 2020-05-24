import { ADD_PRODUCT_CART } from './Type'

export const addTo = (productName) => {
    return (dispatch) => {
        console.log("Adding to Cart")
        console.log("Product: ", productName)
        dispatch({
            type: ADD_PRODUCT_CART,
            payload: productName
        })
    }
}

// This process adds items selected into the cart function based for the redcuers by name