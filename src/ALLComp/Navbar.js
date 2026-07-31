import React, { useEffect } from "react";
import logo from "./IMGs/last.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Aos from "aos";
import "aos/dist/aos.css";
import "./Navbar.css"; // Optional for additional styling

function Navbar() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={{
        backgroundColor: "white",
        height: "80px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <div className="container-fluid">
        {/* Brand Logo */}
        <a className="navbar-brand" href="#top">
          <img
            src={logo}
            alt="Logo"
            className="logoo"
            data-aos="slide-down"
            data-aos-delay="100"
            style={{
              width: "130px",
              height: "85px",
            }}
          />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* Navbar Links */}
            <li className="nav-item">
              <a
                className="nav-link"
                href="#top"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Aboutus"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                ABOUT US
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Client"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                OUR CLIENTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#offer"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#projects"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                PROJECTS
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#Contactus"
                style={{
                  fontSize: "16px",
                  color: "#4e382a",
                  fontWeight: "bold",
                  padding: "10px 15px",
                }}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;