import { NavLink } from "react-router-dom";
import React from "react";
import "../pages/pages.css";

export default function Navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      textDecoration: isActive ? "underline" : "none",
    };
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <NavLink
          style={navLinkStyles}
          title="Bad Bank"
          className="navbar-brand"
          to="/"
        >
          Bad Bank
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              style={navLinkStyles}
              title="Welcome to the home page of the Bad Bank"
              className="nav-link"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              title="Create an account with us"
              style={navLinkStyles}
              className="nav-link"
              to="/createaccount"
            >
              Create Account
            </NavLink>
            <NavLink
              title="Withdraw money from your account"
              style={navLinkStyles}
              className="nav-link"
              to="/withdraw"
            >
              Withdraw
            </NavLink>
            <NavLink
              title="Deposit money into your account"
              style={navLinkStyles}
              className="nav-link"
              to="/deposit"
            >
              Deposit
            </NavLink>
            <NavLink
              title="You'll find a list of all registered users here"
              style={navLinkStyles}
              className="nav-link"
              to="/alldata"
            >
              AllData
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
