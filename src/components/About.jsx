import React from "react";
import aboutusimage from "../rsz_img_2343.png";
import Schedule from "./Schedule";
function About() {
  return (
    <diV>
      <div class="row">
        <div class="col s12 center">
          <h1>Higher Standard is here to help</h1>
        </div>
        <div className="container">
          <div class="col s6 mt60">
            6-columns (one-half)
            <p>
              Shannon Donnelly President & Founder With 12 years’ experience
              working on the front lines of the legal dispensary market, Shannon
              has developed proprietary retail marketing strategies and
              preferred vendor programs . Managing both regulated dispensaries
              including a 10 license chain and product manufactures gives
              Shannon a unique perspective of the regulated cannabis, focusing
              on the operations and ROI. Higher Standard specializes in
              management and executive Higher Standard team is here to help.
            </p>
          </div>

          <div class="col s6 mt60 center">
            <img src={aboutusimage} alt="hello" />
          </div>
        </div>
      </div>
      <div className="mt100">
        <Schedule />
      </div>
    </diV>
  );
}

export default About;
