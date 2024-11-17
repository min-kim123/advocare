import React from 'react';
import './login.css';

function Login() {
  return (
    <div id="login-container" className="hidden">
      <div id="login-formbox">
        <h2>Login</h2>
        <form action="#">
          <div className="login-input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required></input>
          </div>
          <div className="login-input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required></input>
          </div>
          <div className="remember-forget">
            <label htmlFor="checkbox">
              <input type="checkbox" id="checkbox"></input>
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>
          <button type="submit" className="btn">Login</button>
          <div className="login-register">
            <p>
              Not a member?
              <a className="register" href="#">Create an account</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;