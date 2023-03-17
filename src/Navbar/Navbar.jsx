import { Link } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Bad Bank
        </Link>
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
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <Link className="nav-link" to="/balance">
              Balance
            </Link>
            <Link className="nav-link" to="/withdraw">
              Withdraw
            </Link>
            <Link className="nav-link" to="/deposit">
              Deposit
            </Link>
            <Link className="nav-link" to="/register">
              Register
            </Link>
            <Link className="nav-link" to="/alldata">
              AllData
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
