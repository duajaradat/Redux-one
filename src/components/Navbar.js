import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { isValidToken, removeToken, getUser } from "../helper/tokens";

export default function Navbar() {
  const history = useHistory();
  const user = getUser();
  const logoutHandler = async () => {
    await removeToken();

    if (!isValidToken()) {
      history.push("/");
    }
  };

  return (
    <header>
      <nav className="navbar-container">
        <div className="div-navbar">
          <Link className="logo-name" to="/">
            conduit
          </Link>
          {isValidToken() ? (
            <ul className="ul-navbar">
              <li className="li-navbar">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="li-navbar">
                <NavLink to="/" onClick={logoutHandler}>
                  Logout
                </NavLink>
              </li>
              <li className="li-navbar">
                <NavLink to="/">{user.username}</NavLink>
              </li>
              <li className="li-navbar">
                <img className="user-img" src={user.image} />
              </li>
            </ul>
          ) : (
            <ul className="ul-navbar">
              <li className="li-navbar">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="li-navbar">
                <NavLink to="/login">Sign in</NavLink>
              </li>
              <li className="li-navbar">
                <NavLink to="/register">Sign up</NavLink>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
}
