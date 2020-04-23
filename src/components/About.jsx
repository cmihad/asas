import React from "react";
import aboutusimage from "../img/shannonn.png";
import Schedule from "./Schedule";
function About() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-center">Higher Standard is here to Help</h1>
      </div>
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-6 col-xs-12 aboutfont">
            <h3 className="text-justify text-left  ">
              <strong>
                {" "}
                Shannon Donnelly<br></br> President & Founder
                <br></br>
              </strong>{" "}
            </h3>
            <p>
              With 12 years’ experience working on the front lines of the legal
              dispensary market, Shannon has developed proprietary retail
              marketing strategies and preferred vendor programs . Managing both
              regulated dispensaries including a 10 license chain and product
              manufactures gives Shannon a unique perspective of the regulated
              cannabis, focusing on the operations and ROI. Higher Standard
              specializes in management and executive Higher Standard team is
              here to help.
            </p>
          </div>
          <div className="col-md-6 col-xs-12">
            <img className="img-fluid" src={aboutusimage} alt="hello" />
          </div>
        </div>
      </div>
      <hr className=" mt100"></hr>
      <div className="mt100">
        <Schedule />
      </div>
    </div>
  );
}

export default About;
