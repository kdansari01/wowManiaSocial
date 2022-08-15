import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import logo from "../../assests/logo.png"
import "./login.scss"
// import Gif from "../../Data/68312-login.gif"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { NavLink } from "react-router-dom";

const Login = () => {
  const container = useRef(null)

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Data/107385-login.json')

    })
  }, [])
  return (
    <div className="loginPage">
      <div className="loginPageWrapper">
          <div className="login_Page_Left"  >
            <div className="loginPageAnimation" ref={container}>
              {/* <img src={Gif} alt="Loding..." className="loginPageGif"/> */}
              
            </div>
          </div>
         <div className="login_Page_Right">
             <div className="login-logo-section">
                <img src={logo} alt='logo' className="loginLogo"/>
              
             </div>

            <div className="login-section">
             <h3 className="loginHead">Login</h3>
             <hr className="login-hr-line" />

            <div className="loginBox">
           
              <TextField className="loginUserName col-12 "
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <TextField  className="loginPassword col-12"
                id="outlined-basic"
                label="password"
                variant="outlined"
                type="Password"
              />
           
              <div className="loginBtn">
                <Button variant="contained" className="col-12">
                    Login
                </Button>
                </div>

            </div>
            <div className='loginPageSignUp'>
              <p className="GoForSignUp">not a member? </p> 
             <NavLink to="/SignUp" className="signUpLink">Sign Up</NavLink>
            </div>
            <div className='login_Forget'>
              <p className="Go_for_Forget">forget password</p> 
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
