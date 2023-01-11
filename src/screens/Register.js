import { useState, useEffect } from "react";
import {useSelector,useDispatch} from "react-redux"
import Error from "../components/Error";
import Loading from "../components/Loading";
import Success from "../components/Success";
import { registerUser } from "../redux/actions/userActions";
import Footer from "../components/Footer";
import "../components/Footer.css";
import Navbar1 from "../components/Navbar1";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[cpassword,setcPassword] = useState("")

 
//   const registerstate = useSelector(state=>state.registerUserReducer)    //this is for checking loading,error or sucess
//   const{error,loading,success} = registerstate

//   console.log("abhi",registerstate)

  const dispatch = useDispatch()

  const handleRegister = () => {
    if(password !== cpassword){
        alert("password not matched")
    }
    else{
        const user = {
            name,
            email,
            password
        }
        console.log(user)
        dispatch(registerUser(user))
        
    }
  }

  return (
    <>
    <Navbar1/>
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">

        {/* {loading ? (<Loading/>) : ""}
        {success ?  (<Success success="User Registered Successfully"/>) : ""}
        {error ?  (<Error errormsg="Email Already Registered"/>) : ""} */}

       

          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            REGISTER
          </h2>
          <div>
            <input 
            type="text"
             placeholder="name" 
             className="form-control"
             value={name}
             onChange={(e)=>{setName(e.target.value)}}
             required
             />
            <input 
            type="text"
             placeholder="email"
              className="form-control"
              value={email}
              onChange={(e)=>{setEmail(e.target.value)}}
              required
              />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              required
            />
            <input
              type="text"
              placeholder="confim password"
              className="form-control"
              value={cpassword}
              onChange={(e)=>{setcPassword(e.target.value)}}
              required
            />
            <button className="btn mt-3 mb-3" onClick={handleRegister}>REGISTER</button>
            <br/>
            <a style={{color:"black",textDecoration:"none"}} href="/login" >Click Here To Login</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Register;
