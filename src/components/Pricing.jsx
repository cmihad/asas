import React from "react";
import slide1 from "../slide1.png";
import slide2 from "../slide2.png";
import Schedule from "./Schedule";
function Pricing() {
  return (
    <div>
      <div className="container">
        <div className="text-center mt50">
          <h1>Pricing + Services</h1>
        </div>
        <div className="row mt100">
          <div className="col-md-4 col-xs-12 text-left">
            <h5 className="text-left">
              <strong>
                No Project is too big or small<br></br>
                for Higher Standard
              </strong>
            </h5>
          </div>
          <div className="col-md-4 col-xs-12">
            <h5> DISPENSARY OPERATIONS ·</h5> Dispensary Floor Plan Design·
            Merchandising & Vendor Analysis · Secret Shopper Evaluation · METRC
            Audits · Store Health Assessment
            <h5>TRAINING ·</h5> Sales Training and Team Building · Safety
            Training · Operational Process Training · Product Education ·
            Executive training . <h5>BUSINESS PLANNING ·</h5>
            Production Timelines · New Product Launches/Releases· Packaging
            design · Securing Investment· License Sales · License Acquisition
          </div>
          <div className="col-md-4 col-xs-12">
            <h5>MARKETING & BRANDING ·</h5> Brand Building · Marketing Strategy·
            Web Design · Social Media Concepts · Marketing Calendars{" "}
            <h5>HUMAN RESOURCES & MANAGEMENT ·</h5>
            Staffing and Talent Acquisition · Job Descriptions · HR Documents
            <h5> LICENSING & EXPAINSION · </h5> State Applications · Expansion
            plans · Securing Licensing for products · Licensing for Brands
          </div>
        </div>
      </div>
      <div className="container mt100">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item ">
              <img className="d-block w-100" src={slide1} alt="First slide" />
            </div>
            <div className="carousel-item active">
              <img className="d-block w-100" src={slide2} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={slide1} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="mt100">
        <hr></hr>
        <Schedule />
      </div>
    </div>
  );
}

export default Pricing;
