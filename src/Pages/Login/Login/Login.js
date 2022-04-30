import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import DynamicTitle from "../../../Shared/DynamicTitle/DynamicTitle";
const Login = () => {
  return (
    <div className='container my-lg-5'>
      <DynamicTitle title={"| login"}></DynamicTitle>

      <div className='login-tamplates'>
        <form className='input-fild'>
          <h1 className='text-light'>Login</h1>
          <div style={{ margin: "0 0 20px 0" }}>
            <label htmlFor='email'>Your Email: </label>
            <input
              placeholder='Your email'
              type='email'
              name='email'
              id=''
              required
            />
          </div>
          <div style={{ margin: "0 0 10px 0" }}>
            <label htmlFor='password'>Your Password:</label>
            <input
              placeholder='Password'
              type='password'
              name='password'
              id=''
              required
            />
          </div>
          <div className='d-flex align-items-center justify-content-between mb-3 mt-3'>
            <div className='d-flex align-items-center'>
              <input type='checkbox' name='check' id='' />
              <p style={{ marginBottom: "5px" }} className='ms-2 '>
                Agree with terms & condition{" "}
              </p>
            </div>
            <a href='##' className='text-decoration-none text-primary'>
              forget password?
            </a>
          </div>
          <input className='btn-login' type='submit' value='Login' />
          <p style={{ textAlign: "left", marginTop: "10px" }}>
            if you don't have an account please create an{" "}
            <Link to='/signIn' className='text-primary text-decoration-none'>
              account?
            </Link>
          </p>
        </form>
        <div className='social-login'>
          <button className='btn btn-primary d-flex align-items-center justify-content-center'>
            <AiFillFacebook
              style={{
                width: "20px",
                height: "22px",
                color: "#fff",
                marginRight: "10px",
              }}
            />
            Continue with facebook
          </button>
          <button className='btn btn-primary d-flex align-items-center justify-content-center'>
            <FcGoogle
              style={{
                width: "20px",
                height: "22px",
                color: "#fff",
                marginRight: "10px",
              }}
            />
            Continue with Google
          </button>
          <button className='btn btn-primary d-flex align-items-center justify-content-center'>
            <AiOutlineTwitter
              style={{
                width: "20px",
                height: "22px",
                color: "#fff",
                marginRight: "10px",
              }}
            />
            Continue with Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
