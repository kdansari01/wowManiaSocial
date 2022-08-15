import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import logo from "../../assests/logo.png"
import "./login.scss"
// import Gif from "../../Data/68312-login.gif"
import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import { NavLink, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/varifyEmail";
import { customFetch, METHODS } from "../../utils/customFetch";
import { useDispatch } from "react-redux";
import { setIsLogin } from "./action";

const Login = () => {
  const [user, setUser] = useState({email:'', password:''})
  const [errors, setErrors] = useState({email:'', password:''})
  const navigate = useNavigate()

  const dispatch = useDispatch()

  useEffect(()=>{
    const haveToken = !!localStorage.getItem('token')
    if(haveToken){
      navigate('/')
    }
  }, [])





  const handleChange = (e)=>{
    setUser(prev=>({...prev, [e.target.name]:e.target.value}))
    setErrors(prev=>({...prev, [e.target.name]:""}))
  }




  const loginApi = async()=>{
    try {
      const data = await customFetch({
        url:"user/login",
        method:METHODS.POST,
        body:user
      })
      localStorage.setItem('token', data.token)
      dispatch(setIsLogin(true))
      navigate('/')
    }catch(e){
      setErrors(prev=>({...prev, email:e.message}))
    }
  }

  const handleLogin = ()=>{
    if(!user.password && !user.email){
      setErrors(prev=>({email:"Required email field", password:"Required password field"}))
      return 
    }
    if(!user.password){
      setErrors(prev=>({...prev, password:"Required password field"}))
      return 
    }
    if(!user.email){
      setErrors(prev=>({...prev, email:"Required email field"}))
      return 
    }
    const isValidEmail = validateEmail(user.email)
    if(!isValidEmail){
      setErrors(prev=>({...prev, email:"Invalid email"}))
      return
    }
    loginApi()
  }




  const container = useRef(null)
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

            <form className="loginBox" onSubmit={(e)=>{
              e.preventDefault()
              handleLogin()
            }}>
              
              <TextField className="loginUserName col-12"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                name="email"
                onChange={handleChange}
              />
              {errors.email && <span className="text-danger mt-0">{errors.email}</span>}
              <TextField  className="loginPassword col-12 mt-2"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                onChange={handleChange}
              />
              {errors.password && <span className="text-danger ">{errors.password}</span>}
           
              <div className="loginBtn">
                <Button type='submit' variant="contained" className="col-12 mt-3">
                    Login
                </Button>
                </div>

            </form>
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
