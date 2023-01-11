import {createStore,applyMiddleware,combineReducers} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { getAllPizzasReducer } from "./reducers/pizzaReducers";
import {cartReducer} from "./reducers/cartReducers";
import {registerUserReducer} from "./reducers/userReducer";
import {loginUserReducer} from "./reducers/userReducer";
import {placeOrderReducer} from "./reducers/orderReducer";
import {getUserOrdersReducer} from "./reducers/orderReducer"

const rootReducer = combineReducers({
    getAllPizzasReducer:getAllPizzasReducer,
    cartReducer:cartReducer,
    registerUserReducer:registerUserReducer,
    loginUserReducer:loginUserReducer,
    placeOrderReducer:placeOrderReducer,
    getUserOrdersReducer:getUserOrdersReducer
    
})

const cartItems = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []

//store the current user after login in localstorage
const currentUser = localStorage.getItem("currentUser") ? JSON.parse(localStorage.getItem("currentUser")) : null

const initialState = {
   cartReducer:{
    cartItems:cartItems
   },

   loginUserReducer : {
    currentUser:currentUser
   }


}

const composeEnhancers = composeWithDevTools({})

const store  = createStore(rootReducer , initialState , composeEnhancers(applyMiddleware(thunk)))

export default store
