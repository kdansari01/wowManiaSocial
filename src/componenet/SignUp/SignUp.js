import "./signUp.scss"


import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import logo from "../../assests/logo.png"
// import Gif from "../../Data/68312-login.gif"
import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';
import { NavLink, useNavigate } from "react-router-dom";

const SignUp = () => {
    const container = useRef(null) 
    const navigate = useNavigate()
    
    
    useEffect(()=>{
      const haveToken = !!localStorage.getItem('token')
      if(haveToken){
        navigate('/')
      }
    }, [])
  
    useEffect(() => {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('../../AnimationData/107385-login.json')
  
      })
    }, [])
    return (
      <div className="signUpPage">
        <div className="signUpPageWrapper">
            <div className="signUp_Page_Left"  >
              <div className="signPageAnimation" ref={container}>
                {/* <img src={Gif} alt="Loding..." className="loginPageGif"/> */}
                
              </div>
            </div>
           <div className="signUp_Page_Right">
               <div className="signUp-logo-section">
                  <img src={logo} alt='logo' className="signUpLogo"/>
                
               </div>
  
              <div className="signUp-section">
               <h3 className="signUpHead">Sign Up</h3>
               <hr className="signUp-hr-line" />
  
              <div className="signUpBox ">
             
              <TextField className="signUpUserName col-6 "
                  id="outlined-basic"
                  label="firstname"
                  variant="outlined"
                  required
                />

                <TextField className="signUpUserName col-6 "
                  id="outlined-basic"
                  label="lastname"
                  variant="outlined"
                  required
                />

                <TextField className="signUpUserName col-6"
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  required
                />
                 
                <TextField className="signUpUserName col-6 "
                  id="outlined-basic"
                  type="date"
                  variant="outlined"
                />

                <TextField className="signUpUserName col-6 "
                  id="outlined-basic"
                  label="Email"
                  type="email"
                  variant="outlined"
                  required
                />

                <TextField  className="signUpPassword col-6"
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="Password"
                  required
                />
             
                <div className="loginBtn">
                  <Button variant="contained" className="col-12">
                      Sign Up
                  </Button>
                  </div>
  
              </div>
              <div className='loginPageSignUp'>
                <p className="GoForLogin">Have you account? </p> 
              <NavLink to="/Login"className="loginLink">Login</NavLink>
              </div>
              {/* <div className='login_Forget'>
                <p className="Go_for_Forget">forget password</p> 
              
              </div> */}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SignUp
