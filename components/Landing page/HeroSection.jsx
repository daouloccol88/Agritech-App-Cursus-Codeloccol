import React from "react";
import LandingCard from "./LandingCard";

const HeroSection = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-6 col-md-8 col-sm-10 mt-5">
            <h2 className="text-light mt-5">Agricultural and Organic</h2>
            <p className="text-light fw-semibold">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis,
            </p>
            <div className="row">
              <div className="col-lg-12 ">
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
      <div className="container-fluid d-none d-lg-block mt-5 youngroutou">
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

      <div className="container d-block d-lg-none mt-5">
        <div className="row">
          <div className="col-12">
            <h2 className="text-center text-white">Agritech App</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-4">
            <div className="card mt-3 shadow-sm text-center p-1">
              <p className="text-success">
                <i
                  className={` bi bi-graph-up-arrow expandable`}
                  style={{ fontSize: "30px" }}
                ></i>
              </p>
              <h5 className="fw-bold">Indicateurs FAO</h5>
              <p className="text-muted expandable">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <button className="btn btn-outline-success expandable border-0 p-3 px-5 rounded-pill">
                <span className="fw-bold">
                  Plus de Details <i className="bi bi-arrow-up-right"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="card mt-3 shadow-sm text-center p-1">
              <p className="text-success">
                <i
                  className={` bi bi-cloud-sun expandable`}
                  style={{ fontSize: "30px" }}
                ></i>
              </p>
              <h5 className="fw-bold">Météo Local</h5>
              <p className="text-muted expandable">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <button className="btn btn-outline-success expandable border-0 p-3 px-5 rounded-pill">
                <span className="fw-bold">
                  Plus de Details <i className="bi bi-arrow-up-right"></i>
                </span>
              </button>
            </div>
          </div>

          <div className="col-sm-12 col-md-4">
            <div className="card mt-3 shadow-sm text-center p-1">
              <p className="text-success">
                <i
                  className={`bi bi-journal-check expandable`}
                  style={{ fontSize: "30px" }}
                ></i>
              </p>
              <h5 className="fw-bold">Formations Pratiques</h5>
              <p className="text-muted expandable">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor.
              </p>
              <button className="btn btn-outline-success expandable border-0 p-3 px-5 rounded-pill">
                <span className="fw-bold">
                  Plus de Details <i className="bi bi-arrow-up-right"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
