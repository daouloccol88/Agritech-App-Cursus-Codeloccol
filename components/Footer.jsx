import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-5 shadow-lg pt-4">
      <div className="container-fluid">
        <div className="d-flex justify-content-end me-5">
          <h5 className="me-5">Join Our Newsletter</h5>
          <div className="input-group w-25 mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
            <button className="btn bg-green position-absolute end-0 text-light rounded-pill">
              S'abonner
            </button>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="d-flex">
              <img src={"/favicon.ico"} width={50} height={50} />
              <h4 className="pt-2 mb-4">Agritech App</h4>
            </div>
            <p>
              Organic farming avoids toxins. Farmers care for soil and grow
              crops that are safe, natural.Farmers care for soil
            </p>
            <h6>Suivez nous sur:</h6>
            <div className="d-flex">
              <div className="ms-2">
                <i
                  className="bi bi-twitter-x pe-2"
                  style={{ fontSize: "25px" }}
                ></i>
                <i
                  className="bi bi-facebook pe-2"
                  style={{ fontSize: "25px" }}
                ></i>
                <i
                  className="bi bi-linkedin pe-2"
                  style={{ fontSize: "25px" }}
                ></i>
                <i
                  className="bi bi-instagram pe-2"
                  style={{ fontSize: "25px" }}
                ></i>
                <i
                  className="bi bi-tiktok pe-2"
                  style={{ fontSize: "25px" }}
                ></i>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="pt-2 mb-4">Liens Utiles</h4>
            <div className="d-flex flex-column">
              <Link href="/" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Home</h6>
                </div>
              </Link>
              <Link href="/blogs" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Formations</h6>
                </div>
              </Link>
              <Link href="/meteo" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Météo</h6>
                </div>
              </Link>
              <Link href="/FAO" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Indicateurs</h6>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="pt-2 mb-4">Nos Services</h4>
            <div className="d-flex flex-column">
              <Link href="/" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Home</h6>
                </div>
              </Link>
              <Link href="/blogs" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Formations</h6>
                </div>
              </Link>
              <Link href="/meteo" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Météo</h6>
                </div>
              </Link>
              <Link href="/FAO" className="navbar-brand">
                <div className="d-flex ">
                  <h6> &gt;&gt; Indicateurs</h6>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-sm-12">
            <h4 className="pt-2">Contactez Nous</h4>
            <div className="d-flex mb-3">
              <i className="bi bi-telephone fs-2"></i>
              <div className="d-flex flex-column ms-3">
                <span className="text-secondary">Phone:</span>
                <span>(00227) 99 98 97 96</span>
              </div>
            </div>
            <div className="d-flex mb-3">
              <i className="bi bi-geo-alt-fill fs-2"></i>
              <div className="d-flex flex-column ms-3">
                <span className="text-secondary">Location:</span>
                <span>Niamey, Niger</span>
              </div>
            </div>
            <div className="d-flex">
              <i className="bi bi-envelope fs-2"></i>
              <div className="d-flex flex-column ms-3">
                <span className="text-secondary">E-mail:</span>
                <span>support@agritech.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green text-light py-4">
        <p className="ms-5 fs-4">© 2025 Codeloccol, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
