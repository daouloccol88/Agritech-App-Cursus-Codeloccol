import React from "react";

const UpperSection = ({ actualPage }) => {
  return (
    <>
      <div
        className="container text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `linear-gradient(
              rgba(4, 221, 94, 0.2), 
              rgba(4, 221, 94, 0.2)
              ), url("/Home%20Carroussel.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "10px",
          height: "300px",
        }}
      >
        <div>
          <p>Home &gt;&gt; {actualPage}</p>
          <h3>{actualPage}</h3>
        </div>
      </div>
    </>
  );
};

export default UpperSection;
