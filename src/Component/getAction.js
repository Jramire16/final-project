import { GET_ALL_CART } from './Type'


export const getNumbers = () => {
    return (dispatch) => {
        console.log("Showing Cart")
        dispatch({
            type: GET_ALL_CART
        })
    }
}