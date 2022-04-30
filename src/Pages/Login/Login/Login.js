import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className='container'>
      <h1 className='text-primary'>this login page</h1>
      <div className='login-tamplates'>
        <form className='input-fild'>
          <label htmlFor='email'>Your email: </label>
          <input
            placeholder='Your email'
            type='email'
            name='email'
            id=''
            required
          />
          <label htmlFor='password'>Your Password:</label>
          <input
            placeholder='Password'
            type='password'
            name='password'
            id=''
            required
          />
          <input type='submit' value='Login' />
        </form>
        <div className='social-login'>
          <button className='btn btn-primary'>Continue with facebook</button>
          <button className='btn btn-primary'>Continue with Google</button>
          <button className='btn btn-primary'>Continue with Linkdin</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
