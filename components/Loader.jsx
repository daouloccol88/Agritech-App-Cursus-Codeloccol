import React from "react";

const Loader = ({ loadedElement }) => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-center flex-column">
        <div className="spinner-border mx-auto" role="status"></div>
        <div>
          <p className="text-center fw-bold">Loading {loadedElement}...</p>
        </div>
      </div>
    </>
  );
};

export default Loader;
