import React from "react";
import ima from "../img/rsz_img_2408.png";
import Schedule from "./Schedule";
import "../help.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container mt60">
        <div className="text-center">
          <h1>Operational Consulting for the Regulated Cannabis Industry </h1>
          <img className="img-fluid" src={ima} alt="he" />
        </div>
        <div></div>
        <Schedule />
      </div>
    );
  }
}

export default Home;
