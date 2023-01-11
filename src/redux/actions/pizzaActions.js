import { GET_PIZZAS_FAILED, GET_PIZZAS_REQUEST, GET_PIZZAS_SUCCESS } from "../actionTypes/pizzaActionTypes";
import axios from "axios";


const getPizzaRequest = () => {
    return {
      type: GET_PIZZAS_REQUEST,
    };
  };

const getPizzaSuccess = (pizzas) => {
    return {
      type: GET_PIZZAS_SUCCESS,
      payload: pizzas,
    };
  };
  
  const getPizzaFailed = (error) => {
    return {
      type: GET_PIZZAS_FAILED,
      payload: error,
    };
  };





export const getAllPizzas = () => async(dispatch)=>{
    dispatch(getPizzaRequest())
    try{
        const response = await axios.get("https://thoughtful-jersey-ox.cyclic.app/pizzas/getallpizzas")
        console.log(response)
        dispatch(getPizzaSuccess(response.data))
    }
    catch(error){
        dispatch(getPizzaFailed(error))
    }
}

