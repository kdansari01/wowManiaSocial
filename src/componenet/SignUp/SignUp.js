import "./signUp.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assests/logo.png";
// import Gif from "../../Data/68312-login.gif"
import React, { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";
import { NavLink, useNavigate } from "react-router-dom";
import { customFetch, METHODS } from "../../utils/customFetch";


const SignUp = () => {

  const navigate = useNavigate();


  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    dob: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  console.clear();
  console.log(user);



  const signUpApi = async () => {
    try {
       await customFetch({
        url: "user/signup",
        method: METHODS.POST,
        body: {
          name: user.firstname + user.lastname,
          // lastname: user.lastname,
          // username: user.username,
          // dob: user.dob,
          email: user.email,
          password: user.password,
        },
      });
      alert('Signup completed. Redirecting to login page.')
      navigate("/login");
    } catch (e) {
      alert(e.message)
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpApi();
  };

  // useEffect(() => {
  //   // const haveToken = !!localStorage.getItem("token");
  //   // if (haveToken) {
  //   //   navigate("/");
  //   // }
  //   data()
  // }, []);



  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../AnimationData/107385-login.json"),
    });
  }, []);
  return (
    <div className="signUpPage">
      <div className="signUpPageWrapper">
        <div className="signUp_Page_Left">
          <div className="signPageAnimation" ref={container}>
            {/* <img src={Gif} alt="Loding..." className="loginPageGif"/> */}
          </div>
        </div>
        <div className="signUp_Page_Right">
          <div className="signUp-logo-section">
            <img src={logo} alt="logo" className="signUpLogo" />
          </div>

          <div className="signUp-section">
            <h3 className="signUpHead">Sign Up</h3>
            <hr className="signUp-hr-line" />

            <form className="signUpBox " onSubmit={handleSubmit}>
              <TextField
                className="signUpUserName col-6 "
                id="outlined-basic"
                label="firstname"
                variant="outlined"
                name="firstname"
                onChange={handleChange}
                required
              />

              <TextField
                className="signUpUserName col-6 "
                id="outlined-basic"
                label="lastname"
                variant="outlined"
                name="lastname"
                onChange={handleChange}
                required
              />

              <TextField
                className="signUpUserName col-6"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
                name="username"
                onChange={handleChange}
              />

              <TextField
                className="signUpUserName col-6 "
                id="outlined-basic"
                type="date"
                variant="outlined"
                name="dob"
                onChange={handleChange}
              />

              <TextField
                className="signUpUserName col-6 "
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                required
                name="email"
                onChange={handleChange}
              />

              <TextField
                className="signUpPassword col-6"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="Password"
                required
                name="password"
                onChange={handleChange}
              />

              <div className="loginBtn">
                <Button type='submit' variant="contained" className="col-12">
                  Sign Up
                </Button>
              </div>
            </form>
            <div className="loginPageSignUp">
              <p className="GoForLogin">Have you account? </p>
              <NavLink to="/Login" className="loginLink">
                Login
              </NavLink>
            </div>
            {/* <div className='login_Forget'>
                <p className="Go_for_Forget">forget password</p> 
              
              </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
