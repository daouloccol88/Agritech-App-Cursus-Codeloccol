import React from "react";
import LandingCard from "./LandingCard";

const HeroSection = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6 mt-5">
            <h2 className="text-light mt-5">Agricultural and Organic</h2>
            <p className="text-light fw-semibold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis,
            </p>
            <div className="row">
              <div className="col-lg-3 col-md-1"></div>
              <div className="col-lg-9 col-ms-11">
                <div className="d-flex justify-content-end">
                  <div className="btn bg-yellow rounded-pill text-secondary py-3 px-4 fw-semibold">
                    Discutons <i className="bi bi-box-arrow-in-up-right"></i>
                  </div>
                  <div className="btn btn-outline-light rounded-pill ms-2 py-3 px-4 fw-semibold">
                    Nos services <i className="bi bi-box-arrow-in-up-right"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid position-relative card-wrapper">
        <div className="row">
          <div className="col-4">
            <LandingCard
              title={"Indicateurs FAO"}
              image={"FAO_Statistic_Landing.jpg"}
              icon={"bi bi-graph-up-arrow"}
            />
          </div>
          <div className="col-4">
            <LandingCard
              title={"Météo Local"}
              image={"Météo_Landing.jpg"}
              icon={"bi bi-cloud-sun"}
            />
          </div>
          <div className="col-4">
            <LandingCard
              title={"Formations Pratiques"}
              image={"Formation_Landing.jpg"}
              icon={"bi bi-journal-check"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
