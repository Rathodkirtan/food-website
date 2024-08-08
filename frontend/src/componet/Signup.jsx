import React from "react";
import { useState } from "react";
import "./Signup.css";

function signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setemail] = useState("");
  const [moblie, setmoblie] = useState();
  const [password, setpassword] = useState("");

  const register = () => {
    const user = {
      firstname: firstname,
      lastname: lastname,
      email: email,
      moblie: moblie,
      password: password,
    };
    console.log(user);
  };

  return (
    <>
      <div className="signup-body">
        <form action="http://localhost:8000/user/reg" method="post">
          <div className="first-name input">
            <label htmlFor="">First name</label>
            <input
              type="text"
              placeholder="First name"
              className="input-box"
              name="firstname"
              onChange={(e) => setfirstname(e.target.value)}
              required
            />
          </div>
          <div className="last-name input">
            <label htmlFor="">Last name</label>
            <input
              type="text"
              placeholder="Last name"
              className="input-box"
              name="lastname"
              onChange={(e) => setlastname(e.target.value)}
              required
            />
          </div>
          <div className="email input">
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="input-box"
              name="email"
              onChange={(e) => setemail(e.target.value)}
              required
            />
          </div>
          <div className="moblie input">
            <label htmlFor="">Moblie no</label>
            <input
              type="number"
              placeholder="Moblie no"
              className="input-box"
              name="moblie"
              onChange={(e) => setmoblie(e.target.value)}
              required
            />
          </div>
          <div className="password input">
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="input-box"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
              required
            />
          </div>
          <div className="conform-password input">
            <label htmlFor="">Conform password</label>
            <input
              type="password"
              placeholder="Conform password"
              name="confimepassword"
              className="input-box"
              required
            />
          </div>
          <div className="btn-reg input">
            <input type="submit" value="register" onClick={register} />
          </div>
        </form>
      </div>
    </>
  );
}

export default signup;
