import axios from "axios";

// export const PLACE_ORDER_REQUEST = "PLACE_ORDER_REQUEST"
// export const PLACE_ORDER_SUCCESS = "PLACE_ORDER_SUCCESS"
// export const PLACE_ORDER_FAILED  = "PLACE_ORDER_FAILED"

export const placeOrder = (token,subtotal) => async(disptach,getState) => {

    disptach({type:"PLACE_ORDER_REQUEST"})

    const currentUser = getState().loginUserReducer.currentUser
    const cartItems = getState().cartReducer.cartItems

    try{
        const response = await axios.post("https://thoughtful-jersey-ox.cyclic.app/orders/placeorder",{token,subtotal,currentUser,cartItems})
        disptach({type:"PLACE_ORDER_SUCCESS"})
        
        console.log(response)
    }
    catch(error){
        disptach({type:"PLACE_ORDER_FAILED"})
        console.log(error)
    }
}






//-------get user order action------

export const getUserOrder = ()=>async(disptach,getState)=>{

    const currentUser = getState().loginUserReducer.currentUser
    disptach({type:"GET_USER_ORDERS_REQUEST"})

    try{
        const response = await axios.post("https://thoughtful-jersey-ox.cyclic.app/orders/getuserorders" ,{userid : currentUser._id})
        console.log(response)
        disptach({type:"GET_USER_ORDERS_SUCCESS" , payload:response.data})
    }
    catch(error){
        disptach({type:"GET_USER_ORDERS_FAILED" , payload:error})
    }
}