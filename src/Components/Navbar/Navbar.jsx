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
          <Link>
            <span>Sign Up</span>
          </Link>
          <button>Log In</button>
        </div>
      </header>
    </>
  );
}
