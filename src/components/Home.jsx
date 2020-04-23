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
        <div className="text-center mt100">
          <h1 className="mt25">
            Higher Standards recent contracts have resulted in
          </h1>{" "}
          <br></br>
          <h1 className="mt25"> 50% Higher sales on a monthly basis</h1>{" "}
          <br></br>
          <h1 className="mt25"> 60% Higher customer traffic</h1> <br></br>
          <h1 className="mt25">80% Higher Product sales</h1>
          <br className="mt25"></br>
        </div>
        <div>
          <hr className="mt100"></hr>
          <Schedule />
        </div>
      </div>
    );
  }
}

export default Home;
