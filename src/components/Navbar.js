import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar-container">
        <div className="div-navbar">
          <Link className="logo-name" to="/">
            conduit
          </Link>
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
        </div>
      </nav>
    </header>
  );
}
