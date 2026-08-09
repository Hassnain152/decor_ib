import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Offer() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const services = [
    "Elevator Cladding",
    "Wood Work",
    "Wall Cladding",
    "Wooden Counter",
    "Wooden Hidden Door",
    "Wood Ceiling",
    "Decorative Partition",
    "Wood Sliding Door",
    "TV Console",
  ];

  return (
    <section
      id="offer"
      style={styles.section}
    >
      <div
        className="container"
        style={styles.container}
      >

        {/* ================= HEADER ================= */}

        <div
          className="text-center"
          data-aos="fade-down"
        >
          <span style={styles.smallTitle}>
            OUR SERVICES
          </span>

          <h1 style={styles.heading}>
            What We Offer
          </h1>

          <div style={styles.headingLine}></div>

          <p style={styles.description}>
            We provide high-quality interior and woodwork solutions
            designed to bring style, functionality, and elegance to
            every space.
          </p>
        </div>

        {/* ================= SERVICES ================= */}

        <div className="row g-3 g-md-4 justify-content-center">
          {services.map((service, index) => (
            <div
              key={service}
              className="col-12 col-sm-6 col-lg-4"
              data-aos={
                index % 3 === 0
                  ? "fade-right"
                  : index % 3 === 1
                  ? "fade-up"
                  : "fade-left"
              }
              data-aos-delay={(index % 3) * 100}
            >
              <div style={styles.serviceCard}>

                {/* Number */}
                <div style={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div style={styles.icon}>
                  <span>◆</span>
                </div>

                {/* Service */}
                <div style={styles.serviceContent}>
                  <h3 style={styles.serviceTitle}>
                    {service}
                  </h3>

                  <p style={styles.serviceDescription}>
                    Professional and high-quality solutions
                    tailored to your requirements.
                  </p>
                </div>

                {/* Arrow */}
                <div style={styles.arrow}>
                  →
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* ================= BOTTOM CTA ================= */}

        <div
          className="text-center"
          data-aos="fade-up"
          style={styles.cta}
        >
          <h3 style={styles.ctaTitle}>
            Looking for a customized solution?
          </h3>

          <p style={styles.ctaText}>
            Let's discuss your project and create something
            exceptional together.
          </p>

          <a
            href="#Contactus"
            style={styles.ctaButton}
          >
            Contact Us
            <span>→</span>
          </a>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    paddingTop: "clamp(70px, 9vw, 120px)",
    paddingBottom: "clamp(60px, 8vw, 110px)",
    background:
      "linear-gradient(180deg, #ffffff 0%, #faf7f4 100%)",
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
    paddingLeft: "clamp(15px, 4vw, 55px)",
    paddingRight: "clamp(15px, 4vw, 55px)",
  },

  /* Header */

  smallTitle: {
    display: "inline-block",
    color: "#a47c55",
    fontSize: "clamp(11px, 1.2vw, 13px)",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "8px",
  },

  heading: {
    margin: 0,
    color: "#4e382a",
    fontSize: "clamp(34px, 5vw, 54px)",
    lineHeight: "1.2",
    fontWeight: "700",
  },

  headingLine: {
    width: "60px",
    height: "3px",
    backgroundColor: "#a47c55",
    margin: "17px auto",
    borderRadius: "20px",
  },

  description: {
    maxWidth: "680px",
    margin: "0 auto",
    color: "#777",
    fontSize: "clamp(14px, 1.5vw, 17px)",
    lineHeight: "1.7",
    marginBottom: "clamp(35px, 5vw, 60px)",
  },

  /* Service Card */

  serviceCard: {
    width: "100%",
    minHeight: "145px",
    boxSizing: "border-box",
    position: "relative",
    overflow: "hidden",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(78, 56, 42, 0.10)",
    borderRadius: "16px",
    padding: "25px 50px 25px 20px",
    display: "flex",
    alignItems: "center",
    gap: "16px",
    boxShadow: "0 8px 25px rgba(78, 56, 42, 0.07)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease",
  },

  /* Number */

  number: {
    position: "absolute",
    top: "8px",
    right: "14px",
    color: "rgba(164, 124, 85, 0.13)",
    fontSize: "32px",
    fontWeight: "800",
    lineHeight: 1,
  },

  /* Icon */

  icon: {
    width: "50px",
    height: "50px",
    minWidth: "50px",
    borderRadius: "14px",
    backgroundColor: "#f4ece6",
    color: "#a47c55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "13px",
  },

  /* Content */

  serviceContent: {
    minWidth: 0,
  },

  serviceTitle: {
    margin: 0,
    color: "#4e382a",
    fontSize: "clamp(16px, 1.7vw, 20px)",
    lineHeight: "1.35",
    fontWeight: "700",
  },

  serviceDescription: {
    margin: "7px 0 0",
    color: "#888",
    fontSize: "clamp(12px, 1.3vw, 14px)",
    lineHeight: "1.5",
  },

  /* Arrow */

  arrow: {
    position: "absolute",
    right: "18px",
    bottom: "18px",
    color: "#a47c55",
    fontSize: "22px",
    fontWeight: "600",
  },

  /* CTA */

  cta: {
    marginTop: "clamp(45px, 7vw, 75px)",
    padding:
      "clamp(25px, 4vw, 40px) clamp(20px, 5vw, 50px)",
    backgroundColor: "#4e382a",
    borderRadius: "20px",
    color: "#ffffff",
  },

  ctaTitle: {
    margin: "0 0 8px",
    fontSize: "clamp(20px, 2.5vw, 28px)",
    fontWeight: "700",
  },

  ctaText: {
    margin: "0 auto 20px",
    maxWidth: "600px",
    color: "rgba(255,255,255,0.8)",
    fontSize: "clamp(13px, 1.4vw, 16px)",
    lineHeight: "1.6",
  },

  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    padding: "12px 22px",
    backgroundColor: "#ffffff",
    color: "#4e382a",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "700",
    transition: "0.2s",
  },
};

export default Offer;