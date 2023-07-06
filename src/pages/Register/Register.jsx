import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register-heading">
          <h1>Register</h1>
        </div>
        <form>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
          />
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
          />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="password"
            name="password2"
            id="password2"
            placeholder="Confirm password"
          />
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
