import { ADD_PRODUCT_CART, GET_ALL_CART, INCREASE_AMOUNT, DECREASE_AMOUNT, REMOVE_PRODUCT } from "../Component/Type.js";


const initialState = {
    cartNumber: 0,
    cartCost: 0,
    products: {
        cheesepizza: {
            name: "Cheese Pizza",
            itemName: "cheesePizza",
            price: 12.00,
            numbers: 0,
            inCart: false

        },

        pepperonipizza: {
            name: "Pepperoni Pizza",
            itemName: "pepperoniPizza",
            price: 15.00,
            numbers: 0,
            inCart: false

        },

        sausagepizza: {
            name: "Sausage Pizza",
            itemName: "sausagePizza",
            price: 15.00,
            numbers: 0,
            inCart: false

        },

        hawaiianpizza: {
            name: "Hawaiian Pizza",
            itemName: "hawaiianPizza",
            price: 17.00,
            numbers: 0,
            inCart: false
        }
        
    }
    
}

export default (state = initialState, action) => {
    let productSelected = "";
    switch(action.type){
       
        case ADD_PRODUCT_CART:
            
            productSelected = { ...state.products[action.payload]}
            productSelected.cartCost = 0
            productSelected.numbers += 1
            productSelected.inCart = true
            console.log(productSelected)

            return{
                ...state,
                cartNumber: state.cartNumber + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: productSelected
                }
            }
            case GET_ALL_CART:
                return{
                    ...state
                }


            case INCREASE_AMOUNT:
                productSelected = { ...state.products[action.payload]};
                productSelected.numbers += 1;
               
                return{
                    ...state,
                    cartNumber: state.cartNumber + 1,
                    cartCost: state.cartCost + state.products[action.payload].price,
                    products: {
                        ...state.products,
                        [action.payload]: productSelected

                    }
                }


                case DECREASE_AMOUNT:
                    productSelected = { ...state.products[action.payload]}
                    let newCartCost = 0;
                    let newCartAmount = 0;
                    if(productSelected.numbers === 0){
                        productSelected.numbers = 0;
                        newCartCost = state.cartCost
                        newCartAmount = state.cartNumber
                    
                    }
                    else{
                        productSelected.numbers -= 1;
                        newCartCost = state.cartCost - state.products[action.payload].price;
                        newCartAmount = state.cartNumber - 1
                    }

                    return{
                        ...state,
                        cartNumber: newCartAmount,
                        cartCost: newCartCost,
                        products: {
                            ...state.products,
                            [action.payload]: productSelected
    
                        }
                    }


                    case REMOVE_PRODUCT:
                        productSelected = {...state.products[action.payload]}
                        let numbersBackup = productSelected.numbers;
                        productSelected.numbers = 0;
                        productSelected.inCart = false;
                        return{
                            ...state.products,
                            cartNumber: state.cartNumber - numbersBackup,
                            cartCost: state.cartCost - ( numbersBackup * productSelected.price),
                            products: {
                                ...state,
                                [action.payload]: productSelected
                            }
                        }

            
            
         default:
            return {
                ...state
            }
    }
    
}

//Adding items into cart