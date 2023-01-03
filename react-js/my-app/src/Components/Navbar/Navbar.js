import React, { useState } from "react";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  const [isMobile, setIsMobile] = useState(false);
  return (
      <nav className="navbar1">
        <h3 className="logo">Logo</h3>

        <ul onClick={() => setIsMobile(false)} className={isMobile ? "nav-links-mobile" : "nav-links"}>
          <Link to="/" className="home1">
            <li>Home</li>
          </Link>
          <Link to="/about" className="about1">
            <li>About</li>
          </Link>
          <Link to="/service" className="service1">
            <li>Services</li>
          </Link>
          <Link to="/registration" className="registration">
            <li>Registration</li>
          </Link>
          <Link to="/login1" className="login1">
            <li>Login</li>
          </Link>
        </ul>
        <button onClick={() => setIsMobile(!isMobile)} className="mobile-menu-icon">
          {isMobile ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </button>
      </nav>
  );
};

export default Navbar;
