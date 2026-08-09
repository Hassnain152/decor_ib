import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: faFacebookF,
      url: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: faInstagram,
      url: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: faLinkedinIn,
      url: "https://www.linkedin.com",
    },
    {
      name: "WhatsApp",
      icon: faWhatsapp,
      url: "https://wa.me/923176279223",
    },
  ];

  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>

        {/* TOP FOOTER */}
        <div className="row align-items-center gy-5">

          {/* COMPANY INFO */}
          <div
            className="col-12 col-lg-6 text-center text-lg-start"
            data-aos="fade-right"
          >
            <div style={styles.logoText}>
              Shirka Ghala Ibrahim
            </div>

            <div style={styles.goldLine}></div>

            <p style={styles.description}>
              Creating beautiful spaces with exceptional
              craftsmanship, elegant designs, and attention
              to every detail.
            </p>

            <p style={styles.tagline}>
              Quality • Creativity • Excellence
            </p>
          </div>

          {/* SOCIAL MEDIA */}
          <div
            className="col-12 col-lg-6"
            data-aos="fade-left"
          >
            <div style={styles.socialBox}>

              <span style={styles.socialLabel}>
                CONNECT WITH US
              </span>

              <h3 style={styles.socialTitle}>
                Follow Us on Social Media
              </h3>

              <div style={styles.socialContainer}>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    title={social.name}
                    style={styles.socialLink}
                  >
                    <FontAwesomeIcon icon={social.icon} />
                  </a>
                ))}
              </div>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={styles.divider}></div>

        {/* BOTTOM FOOTER */}
        <div
          className="row align-items-center gy-3"
          data-aos="fade-up"
        >
          <div className="col-12 col-md-6 text-center text-md-start">
            <p style={styles.copyright}>
              © {new Date().getFullYear()} Shirka Ghala Ibrahim.
              All rights reserved.
            </p>
          </div>

          <div className="col-12 col-md-6 text-center text-md-end">
            <p style={styles.design}>
              Designed & Developed by{" "}
              <span style={styles.developer}>
                Code and Craft
              </span>
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
};

const styles = {
  footer: {
    width: "100%",
    background:
      "linear-gradient(145deg, #4e382a 0%, #2d2019 100%)",
    color: "#fff",
    paddingTop: "clamp(50px, 7vw, 85px)",
    paddingBottom: "25px",
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    paddingLeft: "clamp(15px, 4vw, 55px)",
    paddingRight: "clamp(15px, 4vw, 55px)",
  },

  logoText: {
    color: "#ffffff",
    fontSize: "clamp(24px, 3.5vw, 38px)",
    fontWeight: "700",
    lineHeight: "1.2",
    letterSpacing: "0.5px",
  },

  goldLine: {
    width: "60px",
    height: "3px",
    backgroundColor: "#c09a6b",
    marginTop: "16px",
    marginBottom: "16px",
    borderRadius: "10px",
  },

  description: {
    maxWidth: "520px",
    margin: "0 auto 12px 0",
    color: "rgba(255,255,255,0.68)",
    fontSize: "clamp(13px, 1.4vw, 16px)",
    lineHeight: "1.8",
  },

  tagline: {
    margin: 0,
    color: "#c09a6b",
    fontSize: "clamp(11px, 1.3vw, 13px)",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  socialBox: {
    textAlign: "center",
    padding: "clamp(20px, 4vw, 35px)",
    borderRadius: "20px",
    backgroundColor: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    backdropFilter: "blur(5px)",
  },

  socialLabel: {
    display: "block",
    color: "#c09a6b",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "8px",
  },

  socialTitle: {
    margin: "0 0 22px",
    color: "#ffffff",
    fontSize: "clamp(19px, 2.5vw, 27px)",
    fontWeight: "600",
  },

  socialContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "13px",
    flexWrap: "wrap",
  },

  socialLink: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#ffffff",
    backgroundColor: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    fontSize: "19px",
    textDecoration: "none",
    transition:
      "all 0.3s ease",
  },

  divider: {
    width: "100%",
    height: "1px",
    backgroundColor: "rgba(255,255,255,0.12)",
    marginTop: "50px",
    marginBottom: "23px",
  },

  copyright: {
    margin: 0,
    color: "rgba(255,255,255,0.52)",
    fontSize: "clamp(11px, 1.3vw, 13px)",
  },

  design: {
    margin: 0,
    color: "rgba(255,255,255,0.52)",
    fontSize: "clamp(11px, 1.3vw, 13px)",
  },

  developer: {
    color: "#c09a6b",
    fontWeight: "700",
  },
};

export default Footer;