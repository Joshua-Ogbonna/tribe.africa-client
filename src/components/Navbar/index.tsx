import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Brand from "../Reusables/Brand/Brand";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <div className="navbar__component shadow-sm">
      <div className="brand">
        <Brand />
      </div>
      <div className="layer middle">
        <ul>
          <li>
            <Link to="#">Features</Link>
          </li>
          <li>
            <Link to="#">Pricing</Link>
          </li>
          <li>
            <Link to="/dashboard">Studio</Link>
          </li>
        </ul>
      </div>
      <div className="layer last">
        <ul>
          <li>
            <Link to="/onboard">Sign Up</Link>
          </li>
          <li>
            <button onClick={() => navigate("/login")}>Login</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
