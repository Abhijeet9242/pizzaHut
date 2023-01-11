import { GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../actionTypes/pizzaActionTypes";

const pizzaState = {pizzas:[]}

 
export const getAllPizzasReducer = (state=pizzaState ,action) => {
    switch(action.type){
        case GET_PIZZAS_REQUEST: return {
            loading:true,
            ...state
        }
        case GET_PIZZAS_SUCCESS: return {
            loading:false,
            pizzas : action.payload
        }
        case GET_PIZZAS_FAILED: return {
            loading:false,
            error : action.payload
        }
        default : return state
    }
}