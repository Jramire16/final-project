import { combineReducers } from 'redux'
import cartReducer from './cartReducer.js'

export default combineReducers({
    cartState: cartReducer
    
})

//Place for all the reducers to be combined if I had more