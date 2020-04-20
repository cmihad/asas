import React from "react";
import ima from "../rsz_img_2408.png";
import Schedule from "./Schedule";
import "../help.css";
class Home extends React.Component {
  render() {
    return (
      <div className="text-center headmain">
        <h1>Operational Consulting for the Regulated Cannabis Industry </h1>
        <img src={ima} alt="he" />
      </div>
    );
  }
}

export default Home;
