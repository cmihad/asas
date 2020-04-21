import React from "react";
import flyer from "../flyer.png";
import Schedule from "./Schedule";
function Merchant() {
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 col-xs-12">
            <img className="img-fluid" src={flyer} alt="hello" />
          </div>
          <div className="col-md-6 col-xs-12 aboutfont">
            <div className="mt-4 mb-4">
              <h2 className="text-left">Merchant processing</h2>
            </div>
            <p className="text-justify text-left ">
              Higher Standard is able to set up regulated cannabis business with
              debit card processing. We offer support to get your organization
              up and going including Sops and on site implementation.
            </p>
            <br className="mt5"></br>
            <p>
              Please reach out to us today for the best rates in the industry.
            </p>
          </div>
        </div>
        <hr className="mt100"></hr>
      </div>
      <div className="mt100">
        <Schedule />
      </div>
    </div>
  );
}

export default Merchant;
