import React from "react";
import { Link } from "react-router-dom";
import "../../Style/Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-logo">
        <span className="blue-wrap"> S.E.M.T </span>{" "}
        <span className="info-wrap">Associates</span>
      </div>
      <div className="navbar-right">
        <Link to="/" className="navbar-rightItem">
          Home
        </Link>
        <Link to="/aboutus" className="navbar-rightItem">
          About Us
        </Link>
        {/* <Link to="/services" className="navbar-rightItem">
          Service
        </Link> */}
        <Link to="/contactus" className="navbar-rightItem">
          Contact Us
        </Link>
        <Link to="/mock-test" className="navbar-rightItem">
          Mock Test
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
