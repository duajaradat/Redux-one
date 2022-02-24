import React from "react";
import Navbar from "./Navbar";
import { Link, useHistory } from "react-router-dom";
import { useRegister } from "../actions/authenticationAction";
import { isValidToken } from "../helper/tokens";
import { useSelector } from "react-redux";
import Error from "./Error";

export default function Register() {
  const [userData, fetchUser] = useRegister();
  const data = useSelector((state) => state.user);

  const error = data.errors;
  console.log(error);
  const history = useHistory();

  const submitHandler = async (e) => {
    e.preventDefault();

    await fetchUser({
      user: {
        username: e.target.username.value,
        email: e.target.email.value,
        password: e.target.password.value,
      },
    });

    if (isValidToken()) {
      history.push("/");
    }
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="account-form">
        <h1>Sign Up</h1>
        <p>
          <Link className="account-text" to="/login">
            Have an account?
          </Link>
        </p>
        {error && <Error />}
        <form className="form" onSubmit={submitHandler}>
          <fieldset className="form-group">
            <input
              name="username"
              type="text"
              className="form-input"
              placeholder="Username"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              name="email"
              type="email"
              className="form-input"
              placeholder="Email"
            />
          </fieldset>
          <fieldset className="form-group">
            <input
              name="password"
              type="password"
              className="form-input"
              placeholder="Password"
            />
          </fieldset>
          <button className="form-btn" type="submit">
            Sign Up
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
