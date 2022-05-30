import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillFacebook } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineTwitter } from "react-icons/ai";
import DynamicTitle from "../../../Shared/DynamicTitle/DynamicTitle";
import auth from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import toast from "react-hot-toast";
import { Spinner } from "react-bootstrap";
const Login = () => {
  const [check, setCheck] = useState(false);
  const [password, setPassword] = useState({ value: "", error: "" });
  const [createUserWithEmailAndPassword, user1, loading1, error1] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [signInWithGoogle, user2, loading2, error2] = useSignInWithGoogle(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      setPassword({ value: password, error: "" });
    } else if (password.length < 7) {
      setPassword({ value: "", error: "password must have 8 digit" });
    } else {
      setPassword({
        value: "",
        error: "password & confirm password dosen't match",
      });
    }
    if (email && password === confirmPassword) {
      createUserWithEmailAndPassword(email, password);
    }
  };
  if (loading1 || loading2 || loading3) {
    return <Spinner animation='grow' />;
  }
  if (error1 || error2 || error3) {
    toast.error(error1?.message || error2?.message || error3?.message, {
      id: "passwordError",
    });
  }
  if (user1 || user2 || user3) {
    toast.success("Successfully sign In!", { id: "error" });
    navigate("/");
  }

  return (
    <div className=' my-lg-3'>
      <DynamicTitle title={"|  signIn"}></DynamicTitle>

      <div className='login-tamplates'>
        <form onSubmit={handleLoginSubmit} className='input-fild'>
          <h1 className='text-light'>Sign In</h1>
          <div style={{ margin: "0 0 20px 0" }}>
            <label htmlFor='name'>Your Name: </label>
            <input
              placeholder='Your name'
              type='text'
              name='name'
              id='name'
              required
            />
          </div>
          <div style={{ margin: "0 0 20px 0" }}>
            <label htmlFor='email'>Your Email: </label>
            <input
              placeholder='Your email'
              type='email'
              name='email'
              id='email'
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
          <div style={{ margin: "0 0 10px 0" }}>
            <label htmlFor='confirmPassword'>Your Password:</label>
            <input
              placeholder='confirm password'
              type='password'
              name='confirmPassword'
              id=''
              required
            />
            {password.error ? (
              <p className='text-danger'>{password.error}</p>
            ) : (
              ""
            )}
          </div>
          <div className='d-flex align-items-center justify-content-between mb-3 mt-3'>
            <div className='d-flex align-items-center'>
              <input
                onClick={() => setCheck(!check)}
                type='checkbox'
                name='check'
                id=''
              />
              <p style={{ marginBottom: "5px" }} className='ms-2 '>
                Agree with terms & condition{" "}
              </p>
            </div>
          </div>
          <input
            disabled={check}
            className='btn-login'
            type='submit'
            value='Sign In'
          />
          <p style={{ textAlign: "left", marginTop: "10px" }}>
            if you already have an account. please{" "}
            <Link to='/login' className='text-primary text-decoration-none'>
              login?
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
