import React from "react";

const LandingCard = ({ image, title, icon }) => {
  return (
    <div>
      <div className="overlap-card">
        <div
          className="card-img-section"
          style={{ backgroundImage: `url(${image})` }}
        ></div>
        <div className="card-content shadow mb-3 text-center">
          <p className="text-success">
            <i
              className={`bi ${icon} expandable`}
              style={{ fontSize: "30px" }}
            ></i>
          </p>
          <h5 className="fw-bold">{title}</h5>
          <p className="text-muted expandable">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis
          </p>
          <button className="btn btn-outline-success expandable border-0 p-3 px-5 rounded-pill">
            <span className="fw-bold">
              Plus de Details <i className="bi bi-arrow-up-right"></i>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingCard;
