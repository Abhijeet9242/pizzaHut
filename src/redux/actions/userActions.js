import axios from "axios";

export const USER_REGISTER_REQUEST = " USER_REGISTER_REQUEST";
export const USER_REGISTER_SUCCESS = " USER_REGISTER_SUCCESS";
export const USER_REGISTER_FAILED = " USER_REGISTER_FAILED";

export const USER_LOGIN_REQUEST = " USER_LOGIN_REQUEST";
export const USER_LOGIN_SUCCESS = " USER_LOGIN_SUCCESS";
export const USER_LOGIN_FAILED = " USER_LOGIN_FAILED";



const registerUserRequest = () => {
    return{
        type:USER_REGISTER_REQUEST
    }
}
const registerUserSuccess = (user) => {
    return{
        type:USER_REGISTER_SUCCESS
    }
}
const registerUserFailed = (payload) => {
    return{
        type:USER_REGISTER_FAILED,
        payload:payload
    }
}


export const registerUser = (user) => async(dispatch) =>{
    dispatch(registerUserRequest)

    try{
        const response = await axios.post("https://thoughtful-jersey-ox.cyclic.app/users/register",user)
        console.log(response)
        dispatch(registerUserSuccess)
    }
    catch(error){
        dispatch(registerUserFailed(error))
    }

}

const loginUserRequest = () => {
    return{
        type:USER_REGISTER_REQUEST
    }
}
const loginUserSuccess = (payload) => {
    return{
        type:USER_REGISTER_SUCCESS,
        payload:payload
    }
}
const loginUserFailed = (payload) => {
    return{
        type:USER_REGISTER_FAILED,
        payload:payload
    }
}

export const loginUser = (user) => async(dispatch) =>{
    dispatch(loginUserRequest)

    try{
        const response = await axios.post("https://thoughtful-jersey-ox.cyclic.app/users/login",user)
        console.log(response)
        dispatch(loginUserSuccess(response.data))
        localStorage.setItem("currentUser",JSON.stringify(response.data))
        window.location.href="/homepage"
    }
    catch(error){
        dispatch(loginUserFailed(error))
    }

}


//logout

export const logoutUser = () => (dispatch) => {
    localStorage.removeItem("currentUser")
    localStorage.removeItem("cartItems")
    window.location.href="/login"
}