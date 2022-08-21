// import "./signUp.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import logo from "../../assests/logo.png";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { customFetch, METHODS } from "../../utils/customFetch";
import Auth from "../auth";

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    username: "",
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
          name: user.firstname,
          email: user.email,
          password: user.password,
        },
      });
      alert("Signup completed. Redirecting to login page.");
      navigate("/login");
    } catch (e) {
      alert(e.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    signUpApi();
  };

  return (
    <Auth>
      <div className="login_Page_Right d-flex justify-content-center w-100">
        <div className='w-75'>
        <div className="login-logo-section">
          <img src={logo} alt="logo" className="loginLogo" />
        </div>

        <div className="signUp-section ">
          <h3 className="signUpHead text-center">Sign Up</h3>
          <hr className="signUp-hr-line" />

          <form className="signUpBox row" onSubmit={handleSubmit}>
            <div className="col-12">
              <TextField
                className="signUpUserName w-100 mb-3"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                name="firstname"
                onChange={handleChange}
                required
              />
            </div>

            <div className="col-12">
              <TextField
                className="signUpUserName w-100 mb-3"
                id="outlined-basic"
                label="Username"
                variant="outlined"
                required
                name="username"
                onChange={handleChange}
              />
            </div>


            <div className="col-12">
              <TextField
                className="signUpUserName w-100 mb-3"
                id="outlined-basic"
                label="Email"
                type="email"
                variant="outlined"
                required
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <TextField
                className="signUpPassword w-100 mb-3 "
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="Password"
                required
                name="password"
                onChange={handleChange}
              />
            </div>

            <div className="loginBtn">
              <Button type="submit" variant="contained" className="col-12 py-2">
                Sign Up
              </Button>
            </div>
          </form>
          <div className="loginPageSignUp">
            <p className="GoForLogin mt-2">Have you account? </p>
            <NavLink to="/Login" className="loginLink mx-2 mt-2">
              Login
            </NavLink>
          </div>
        </div>
      </div></div>
    </Auth>
  );
};

export default SignUp;
