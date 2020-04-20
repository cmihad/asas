import React from "react";
import aboutusimage from "../rsz_img_2343.png";
import Schedule from "./Schedule";
function About() {
  return (
    <div>
      <div className="mt-4">
        <h1 className="text-center">Higher Standard is here to Help</h1>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-6 aboutfont">
            <p className="text-justify text-left mr-5 ">
              <strong> Shannon Donnelly President & Founder</strong> With 12
              years’ experience working on the front lines of the legal
              dispensary market, Shannon has developed proprietary retail
              marketing strategies and preferred vendor programs . Managing both
              regulated dispensaries including a 10 license chain and product
              manufactures gives Shannon a unique perspective of the regulated
              cannabis, focusing on the operations and ROI. Higher Standard
              specializes in management and executive Higher Standard team is
              here to help.
            </p>
          </div>
          <div className="col-6 ">
            <img className="img-fluid ml-5" src={aboutusimage} alt="hello" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
