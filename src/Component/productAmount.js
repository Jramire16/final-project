import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from "./Type"


export const productAmount = (itemName, action) =>{
    return(dispatch) => {
        console.log("Inside product")
        console.log("The action is ", action)
        console.log("The product is ", itemName)

        dispatch({
            type: action === "Increase" ? INCREASE_AMOUNT : DECREASE_AMOUNT,
            payload: itemName
        })
    }
}
export const removeProduct = (action, itemName) => {
    return(dispatch) => {
        console.log("Inside product")
        console.log("Product remove ", itemName)

        dispatch({
            type: REMOVE_PRODUCT,
            payload: itemName
        });
    }
}

//When the console is acting, this component posts the type that corresponds with the action.