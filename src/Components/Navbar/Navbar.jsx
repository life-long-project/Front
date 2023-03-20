import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          <h3>SHAGHAL</h3>
        </Link>

        <div className="top-btn">
          <Link to="/signup">
            <span>Sign Up</span>
          </Link>
          <Link to="/login">
            <button>Log In</button>
          </Link>
        </div>
      </header>
    </>
  );
}
