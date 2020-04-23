import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import Footer from "./Footer";

function Schedule() {
  return (
    <div>
      <div className="container">
        <div className="text-center mt60">
          <h2>Let's talk!</h2>
          <h2>your first consultation is free.</h2>
          <Link to="/contactus">
            <button className="btn btn-dark btn-lg mt-3">SCHEDULE</button>
          </Link>
        </div>
        <div className="text-center">
          <a href="https://www.github.com/bkrall" target="_blank">
            <i className="fa fa-github" aria-hidden="true">
              {" "}
            </i>
          </a>
          <a href="https://www.linkedin.com/in/bkrall" target="_blank">
            <i className="nea" aria-hidden="true"></i>
          </a>
          <a href="https://www.medium.com/@bkrall">
            <i className="fa fa-medium" aria-hidden="true"></i>
          </a>
          <a href="https://open.spotify.com/user/1217009251" target="_blank">
            <i className="fa fa-spotify" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Schedule;
