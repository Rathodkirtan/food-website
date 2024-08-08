import React from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="container">
        <form action="http://localhost:8000/user/login" method="post">
          <h1>Login</h1>
          <div className="email">
            <label htmlFor="">email</label>
            <input
              type="email"
              placeholder="email"
              required
              className="box"
              name="email"
            />
          </div>
          <div className="password">
            <label htmlFor="">password</label>
            <input
              type="password"
              placeholder="password"
              required
              className="box"
              name="password"
            />
          </div>
          Not registered ?{" "}
          <NavLink to="/signup" className="signuplink">
            Signup
          </NavLink>
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}

export default Login;
