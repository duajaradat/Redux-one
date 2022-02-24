import React from "react";
import Navbar from "./Navbar";
import Error from "./Error";
import { Link, useHistory } from "react-router-dom";
import { useLogin } from "../actions/authenticationAction";
import { useSelector } from "react-redux";
import { isValidToken, getToken, setToken } from "../helper/tokens";

export default function LoginForm() {
  const [userLogin, fetchLogin] = useLogin();
  const history = useHistory();
  const data = useSelector((state) => state.user);

  const error = data.errors;

  const loginHandle = (e) => {
    e.preventDefault();
    console.log("hello");
    fetchLogin({
      user: {
        email: e.target.email.value,
        password: e.target.password,
      },
    }).then(() => isValidToken() && history.push("/"));
    setToken(userLogin.token);
    console.log(getToken());
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="account-form">
        <h1>Sign In</h1>
        <p>
          <Link className="account-text" to={"/register"}>
            Need an account?
          </Link>
        </p>
        {error && <Error />}
        <form className="form" onSubmit={loginHandle}>
          <fieldset className="form-group">
            <input
              type="email"
              name="email"
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
            Sign In
          </button>
        </form>
      </div>
    </React.Fragment>
  );
}
