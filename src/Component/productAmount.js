import { INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from "./Type"


export const productAmount = (action, name) =>{
    return(dispatch) => {
        console.log("Inside product")
        console.log("The action is ", action)
        console.log("The product is ", name)

        dispatch({
            type: action === "increase" ? INCREASE_AMOUNT : DECREASE_AMOUNT,
            payload: name
        })
    }
}
export const removeProduct = (action, name) => {
    return(dispatch) => {
        console.log("Inside product")
        console.log("Product remove ", name)

        dispatch({
            type: REMOVE_PRODUCT,
            payload: name
        });
    }
}

//When the console is acting, this component posts the type that corresponds with the action.