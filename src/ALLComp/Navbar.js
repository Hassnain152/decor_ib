import React, { useEffect } from "react";
import logo from "./IMGs/last.png";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import Aos from "aos";
import "aos/dist/aos.css";

function Navbar() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const links = [
    { name: "HOME", href: "#top" },
    { name: "ABOUT US", href: "#Aboutus" },
    { name: "OUR CLIENTS", href: "#Client" },
    { name: "SERVICES", href: "#offer" },
    { name: "PROJECTS", href: "#projects" },
    { name: "CONTACT US", href: "#Contactus" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light fixed-top"
      style={styles.navbar}
    >
      <div
        className="container-fluid"
        style={styles.container}
      >
        {/* Logo */}
        <a
          href="#top"
          style={styles.logoLink}
          data-aos="slide-down"
          data-aos-delay="100"
        >
          <img
            src={logo}
            alt="Logo"
            style={styles.logo}
          />
        </a>

        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={styles.toggler}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation */}
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={styles.menu}
        >
          <ul
            className="navbar-nav ms-auto align-items-lg-center"
            style={styles.navList}
          >
            {links.map((link, index) => (
              <li
                className="nav-item"
                key={link.name}
                data-aos="fade-down"
                data-aos-delay={150 + index * 100}
              >
                <a
                  className="nav-link"
                  href={link.href}
                  style={styles.navLink}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    width: "100%",
    minHeight: "80px",
    backgroundColor: "#ffffff",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.10)",
    zIndex: 1050,
    padding: "0",
  },

  container: {
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    paddingLeft: "clamp(15px, 4vw, 60px)",
    paddingRight: "clamp(15px, 4vw, 60px)",
    minHeight: "80px",
  },

  logoLink: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    flexShrink: 0,
  },

  logo: {
    width: "clamp(90px, 10vw, 130px)",
    height: "auto",
    maxHeight: "75px",
    objectFit: "contain",
    display: "block",
  },

  toggler: {
    marginLeft: "auto",
    padding: "6px 9px",
    border: "1px solid rgba(78, 56, 42, 0.3)",
    borderRadius: "8px",
  },

  menu: {
    flexGrow: 1,
  },

  navList: {
    margin: 0,
    padding: 0,
  },

  navLink: {
    fontSize: "clamp(13px, 1.1vw, 16px)",
    color: "#4e382a",
    fontWeight: "700",
    padding: "10px clamp(8px, 1vw, 15px)",
    whiteSpace: "nowrap",
    transition: "all 0.2s ease",
  },
};

export default Navbar;