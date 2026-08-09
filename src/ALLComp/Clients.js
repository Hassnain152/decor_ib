import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Clients() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const clients = [
    "Shaza Hotel",
    "Dallah Nahkeel Hospital",
    "SCFHS Abha",
    "SCFHS Riyadh",
    "Al Fagih Hospital",
    "Nofa Resort Tabrak",
    "Vella Al Syed",
    "Al Nair Mosque",
    "Al Essa Projects",
    "Accommodation Dallah Hospital",
    "Accommodation Suleman Hospital",
    "Ameer Suleman Hospital",
  ];

  return (
    <section id="Client" style={styles.section}>
      <div className="container" style={styles.container}>

        {/* Heading */}
        <div
          className="text-center"
          data-aos="fade-down"
        >
          <span style={styles.smallTitle}>
            OUR PARTNERS
          </span>

          <h1 style={styles.heading}>
            Our Clients
          </h1>

          <div style={styles.headingLine}></div>

          <p style={styles.description}>
            We are proud to work with trusted organizations and
            leading brands across different industries.
          </p>
        </div>

        {/* Client Cards */}
        <div className="row g-3 g-md-4 justify-content-center">
          {clients.map((client, index) => (
            <div
              key={client}
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
              <div style={styles.clientCard}>

                {/* Number */}
                <div style={styles.number}>
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <div style={styles.icon}>
                  ◆
                </div>

                {/* Client Name */}
                <h3 style={styles.clientName}>
                  {client}
                </h3>

                {/* Arrow */}
                <div style={styles.arrow}>
                  →
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom text */}
        <div
          className="text-center"
          data-aos="fade-up"
          style={styles.bottom}
        >
          <p style={styles.bottomText}>
            Building strong relationships through quality,
            reliability, and professional service.
          </p>
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
    maxWidth: "650px",
    margin: "0 auto",
    color: "#777",
    fontSize: "clamp(14px, 1.5vw, 17px)",
    lineHeight: "1.7",
    marginBottom: "clamp(35px, 5vw, 60px)",
  },

  clientCard: {
    width: "100%",
    minHeight: "105px",
    boxSizing: "border-box",
    backgroundColor: "#ffffff",
    border: "1px solid rgba(78, 56, 42, 0.10)",
    borderRadius: "16px",
    padding: "20px",
    display: "flex",
    alignItems: "center",
    gap: "15px",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(78, 56, 42, 0.07)",
    transition:
      "transform 0.3s ease, box-shadow 0.3s ease",
  },

  number: {
    position: "absolute",
    top: "8px",
    right: "14px",
    color: "rgba(164, 124, 85, 0.15)",
    fontSize: "30px",
    fontWeight: "800",
    lineHeight: 1,
  },

  icon: {
    width: "45px",
    height: "45px",
    minWidth: "45px",
    borderRadius: "12px",
    backgroundColor: "#f4ece6",
    color: "#a47c55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "14px",
  },

  clientName: {
    margin: 0,
    paddingRight: "25px",
    color: "#4e382a",
    fontSize: "clamp(15px, 1.6vw, 19px)",
    lineHeight: "1.4",
    fontWeight: "650",
  },

  arrow: {
    marginLeft: "auto",
    color: "#a47c55",
    fontSize: "22px",
    fontWeight: "600",
    flexShrink: 0,
  },

  bottom: {
    marginTop: "clamp(40px, 6vw, 70px)",
  },

  bottomText: {
    margin: 0,
    color: "#8a817b",
    fontSize: "clamp(13px, 1.4vw, 16px)",
    fontStyle: "italic",
  },
};

export default Clients;