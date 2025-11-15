"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    setCurrentUser(user);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setCurrentUser(null);
    router.push("/");
  };

  return (
    <>
      {/* ====== DESKTOP NAVBAR (hidden on md and below) ====== */}
      <nav className="navbar navbar-expand-lg bg-navbar flex-column d-none d-md-flex">
        <div className="container-fluid ">
          <div className="d-flex">
            <div className="d-flex">
              <i className="bi bi-envelope" style={{ fontSize: "35px" }}></i>
              <h6 className="pt-3 ps-1">support@agritech.com</h6>
            </div>

            <div className="d-flex ps-4">
              <i className="bi bi-telephone" style={{ fontSize: "30px" }}></i>
              <h6 className="pt-3 ps-1">(00227) 99 98 97 96</h6>
            </div>
          </div>

          <Link href="/" className="navbar-brand">
            <div className="d-flex">
              <img src={"/favicon.ico"} width={50} height={50} />
              <h4 className="pt-2">Agritech App</h4>
            </div>
          </Link>

          <div className="d-flex">
            <div className="d-flex pe-3 border-end border-secondary">
              <img src="Niger.png" width={50} height={35} />
              <h6 className="pt-1 ps-2">NE</h6>
            </div>

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
              <i className="bi bi-tiktok pe-2" style={{ fontSize: "25px" }}></i>
            </div>
          </div>
        </div>
      </nav>

      {/*--------------------------------The second navbar--------------------------------*/}
      <nav className="bg-white d-none d-md-flex py-2 shadow-sm ">
        <div className="d-flex justify-content-between align-items-center mt-2 w-100 px-3">
          {/* Input Group */}
          <div className="input-group w-25">
            <span className="input-group-text" id="basic-addon1">
              <i className="bi bi-search" style={{ fontSize: "20px" }}></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search anything ..."
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>

          {/* Links Section */}
          <div className="d-flex ">
            <Link href="/" className="navbar-brand">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Home</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/blogs" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Formations</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/meteo" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Météo</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/FAO" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Indicateurs</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
          </div>

          {/* Dynamic Button or User Info */}
          <div>
            {currentUser ? (
              <>
                <span className="mx-2 fw-semibold">
                  Hello, {currentUser.name}
                </span>
                <button
                  className="btn rounded-pill btn-danger p-2 px-3"
                  onClick={handleLogout}
                >
                  Disconnect
                  <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="btn bg-green me-5 p-2 px-5 rounded-pill"
              >
                <div className="d-flex text-light">
                  <h5 className="pt-1">Connect</h5>
                  <i
                    className="bi bi-box-arrow-in-left ms-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* ================================ MOBILE NAVBAR (hamburger) ================================ */}
      <nav className="fixed-top navbar bg-light d-flex d-md-none px-3 shadow-sm">
        <Link href="/" className="navbar-brand mx-auto">
          <div className="d-flex">
            <img src={"/favicon.ico"} width={40} height={40} />
            <h5 className="pt-2 ps-2">Agritech App</h5>
          </div>
        </Link>

        <button
          className="btn"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#mobileMenu"
        >
          <i className="bi bi-list" style={{ fontSize: "30px" }}></i>
        </button>
      </nav>

      {/* =================================== LEFT SIDEBAR DRAWER (OFFCANVAS) ============================================= */}
      <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileMenu">
        <div className="offcanvas-header">
          <img src={"/favicon.ico"} width={50} height={50} />
          <h5>Agritech Menu</h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body">
          <div className="ms-5">
            {currentUser ? (
              <>
                <span className="mx-2 fw-semibold">
                  Hello, {currentUser.name}
                </span>
                <button
                  className="btn rounded-pill btn-danger p-2 px-3"
                  onClick={handleLogout}
                >
                  Disconnect
                  <i className="bi bi-box-arrow-in-right"></i>
                </button>
              </>
            ) : (
              <Link
                href="/login"
                className="btn bg-green me-5 p-2 px-5 rounded-pill"
              >
                <div className="d-flex text-light ">
                  <h5 className="pt-1 ">Connect</h5>
                  <i
                    className="bi bi-box-arrow-in-left ms-3"
                    style={{ fontSize: "20px" }}
                  ></i>
                </div>
              </Link>
            )}
          </div>

          <hr />

          <div className="mb-3">
            <Link href="/" className="navbar-brand">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Home</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/blogs" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Blogs</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/meteo" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Météo</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
            <Link href="/FAO" className="navbar-brand ms-4">
              <div className="d-flex icon-link icon-link-hover">
                <h5>Indicateurs</h5>
                <i className="bi bi-arrow-up-right fs-6 pb-4"></i>
              </div>
            </Link>
          </div>

          <hr />

          <h5 className="text-center mb-3">Socials Links:</h5>

          <div className="d-flex ms-5">
            <div className="d-flex pe-3 border-end border-secondary">
              <img src="Niger.png" width={50} height={35} />
              <h6 className="pt-1 ps-2">NE</h6>
            </div>

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
              <i className="bi bi-tiktok pe-2" style={{ fontSize: "25px" }}></i>
            </div>
          </div>

          <div className="mt-3">
            <p className="text-center fw-bold">
              <i className="bi bi-envelope pe-2 fs-3"></i> support@agritech.com
            </p>

            <p className="text-center fw-bold">
              <i className="bi bi-telephone pe-2 fs-3"></i> (00227) 99 98 97 96
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
