import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import DynamicTitle from "../../../Shared/DynamicTitle/DynamicTitle";
import auth from "../../../firebase.init";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
const Login = () => {
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  if (user1 || user2) {
    toast.success("Successfully log in!", { id: "login-done" });
    navigate("/");
  }
  if (loading1 || loading2) {
    return <Spinner animation='grow' />;
  }
  return (
    <div className='my-lg-5'>
      <DynamicTitle title={"|  login"}></DynamicTitle>

      <div className='login-tamplates'>
        <form onSubmit={handleLogIn} className='input-fild'>
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
            {error1 || error2 ? (
              <p className='text-danger'>
                {error1?.message || error2?.message}
              </p>
            ) : (
              ""
            )}
          </div>
          <div className='d-flex align-items-center justify-content-between mb-3 mt-3'>
            <div className='d-flex align-items-center'>
              <input type='checkbox' name='check' id='' />
              <p style={{ marginBottom: "5px" }} className='ms-2 '>
                Remember me?{" "}
              </p>
            </div>
            <a href='##' className='text-decoration-none text-primary'>
              forget password?
            </a>
          </div>
          <input className='btn-login' type='submit' value='Login' />
          <p style={{ textAlign: "left", marginTop: "10px" }}>
            if you don't have an account please{" "}
            <Link to='/signIn' className='text-primary text-decoration-none'>
              create an account?
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
          <button
            onClick={() => signInWithGoogle()}
            className='btn btn-primary d-flex align-items-center justify-content-center'
          >
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
