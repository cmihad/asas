import React from "react";
import logo from "../img/logo.png";
const Footer = () => {
  return (
    <div className="container mt100">
      <div className="text-center">
        <span>
          All rights reserved | &copy; {new Date().getFullYear()} | Higher
          Standard
          <span role="img" aria-label="alien">
            <img src={logo} alt="fhje" />
          </span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
