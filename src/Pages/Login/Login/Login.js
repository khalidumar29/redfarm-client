import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import DynamicTitle from "../../../Shared/DynamicTitle/DynamicTitle";
import auth from "../../../firebase.init";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
import axios from "axios";
const Login = () => {
  const [signInWithEmailAndPassword, user1, loading1, error1] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const [sendPasswordResetEmail, sending, error3] =
    useSendPasswordResetEmail(auth);
  const [signInWithFacebook, user4, loading4, error4] =
    useSignInWithFacebook(auth);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleLogIn = async (e) => {
    e.preventDefault();
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://warehouse-management10.herokuapp.com/inventory/getjwt",
      {
        email,
      }
    );
    localStorage.setItem("secretToken", data.secretToken);
  };

  if (user1 || user2 || user4) {
    toast.success("Successfully log in!", { id: "login-done" });
    navigate("/");
  }
  if (loading1 || loading2 || sending || loading4) {
    return <Spinner animation='grow' />;
  }

  const handlePassordReset = async () => {
    await sendPasswordResetEmail(email);
    if (error3) {
      toast.error(error3?.message, { id: "reset-error" });
    } else {
      toast.success("send your password reset email", { id: "reset-password" });
    }
  };
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
              id='iuhiuh'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={{ margin: "0 0 10px 0" }}>
            <label htmlFor='password'>Your Password:</label>
            <input
              placeholder='Password'
              type='password'
              name='password'
              id='ihu'
              required
            />
            {error1 || error2 || error4 ? (
              <p className='text-danger'>
                {error1?.message || error2?.message || error4?.message}
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
            <p
              style={{ cursor: "pointer" }}
              onClick={handlePassordReset}
              className='text-decoration-none text-primary'
            >
              forget password?
            </p>
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
          <button
            onClick={() => signInWithFacebook()}
            className='btn btn-primary d-flex align-items-center justify-content-center'
          >
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
