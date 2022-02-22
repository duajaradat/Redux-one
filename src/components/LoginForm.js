import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

export default function LoginForm() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="account-form">
        <h1>Sign In</h1>
        <p>
          <Link className="account-text" to="/login">
            Need an account?
          </Link>
        </p>
        <form className="form">
          <fieldset className="form-group">
            <input type="email" className="form-input" placeholder="Email" />
          </fieldset>
          <fieldset className="form-group">
            <input
              type="password"
              className="form-input"
              placeholder="Password"
            />
          </fieldset>
          <button className="form-btn" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
