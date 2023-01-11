import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/userActions";
import Footer from "../components/Footer";
import "../components/Footer.css";
import Navbar1 from "../components/Navbar1";

const Login = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();

  const handleLogin = () => {
    const user = {
        email,
        password
    }
    dispatch(loginUser(user))
  };


  useEffect(()=>{
    if(localStorage.getItem("currentUser")){
        window.location.href="/homepage"
    }
  })


  return (
    <>
    <Navbar1/>
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
          <h2 className="text-center m-2" style={{ fontSize: "35px" }}>
            LOGIN
          </h2>
          <div>
            <input
              type="text"
              placeholder="email"
              className="form-control"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <input
              type="text"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />

            <button className="btn mt-3 mb-3" onClick={handleLogin}>
              LOGIN
            </button>
            <br/>
            <a style={{color:"black",textDecoration:"none"}}  href="/register" >Click Here To Register</a>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
    </>
  );
};

export default Login;
