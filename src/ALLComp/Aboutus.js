import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <section id="Aboutus" style={styles.section}>
      <div className="container" style={styles.container}>

        {/* ================= HEADER ================= */}

        <div
          className="text-center"
          data-aos="fade-down"
        >
          <span style={styles.smallTitle}>
            WHO WE ARE
          </span>

          <h1 style={styles.heading}>
            About Us
          </h1>

          <div style={styles.headingLine}></div>

          <p style={styles.intro}>
            Creating beautiful spaces through craftsmanship,
            creativity, and attention to detail.
          </p>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="row align-items-center g-4 g-lg-5">

          {/* Left Decorative Block */}

          <div
            className="col-12 col-lg-5"
            data-aos="fade-right"
          >
            <div style={styles.visualCard}>

              <div style={styles.decorativeCircle}></div>

              <div style={styles.visualContent}>

                <div style={styles.quoteMark}>
                  “
                </div>

                <h2 style={styles.visualTitle}>
                  Crafting Spaces.
                  <br />
                  Creating Experiences.
                </h2>

                <div style={styles.visualLine}></div>

                <p style={styles.visualText}>
                  Where quality craftsmanship meets timeless
                  design and creative thinking.
                </p>

              </div>

              <div style={styles.cornerNumber}>
                01
              </div>

            </div>
          </div>

          {/* Right Content */}

          <div
            className="col-12 col-lg-7"
            data-aos="fade-left"
          >
            <div style={styles.content}>

              <span style={styles.contentLabel}>
                OUR STORY
              </span>

              <h2 style={styles.contentTitle}>
                Turning Your Vision Into Reality
              </h2>

              <p style={styles.paragraph}>
                Welcome to our company! We specialize in creating
                bespoke furniture and exquisite decorations that
                transform ordinary spaces into beautiful
                masterpieces.
              </p>

              <p style={styles.paragraph}>
                Our commitment to quality, craftsmanship, and
                customer satisfaction has been the cornerstone of
                our success. Every project is approached with
                attention to detail and a passion for creating
                something truly unique.
              </p>

              <p style={styles.paragraph}>
                Whether you are looking to revamp your living room,
                create an elegant office environment, or transform
                a commercial space, our team is here to bring your
                ideas to life.
              </p>

              {/* Highlights */}

              <div className="row g-3 mt-3">

                <div className="col-12 col-sm-4">
                  <div style={styles.highlight}>
                    <div style={styles.highlightIcon}>
                      ◆
                    </div>

                    <h4 style={styles.highlightTitle}>
                      Quality
                    </h4>

                    <p style={styles.highlightText}>
                      Premium materials and exceptional
                      workmanship.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div style={styles.highlight}>
                    <div style={styles.highlightIcon}>
                      ◆
                    </div>

                    <h4 style={styles.highlightTitle}>
                      Creativity
                    </h4>

                    <p style={styles.highlightText}>
                      Unique designs tailored to your vision.
                    </p>
                  </div>
                </div>

                <div className="col-12 col-sm-4">
                  <div style={styles.highlight}>
                    <div style={styles.highlightIcon}>
                      ◆
                    </div>

                    <h4 style={styles.highlightTitle}>
                      Excellence
                    </h4>

                    <p style={styles.highlightText}>
                      Dedicated to exceeding expectations.
                    </p>
                  </div>
                </div>

              </div>

              {/* CTA */}

              <a
                href="#Contactus"
                style={styles.button}
              >
                Let's Work Together
                <span style={styles.buttonArrow}>
                  →
                </span>
              </a>

            </div>
          </div>

        </div>

        {/* ================= BOTTOM VALUES ================= */}

        <div
          className="row text-center"
          style={styles.values}
          data-aos="fade-up"
        >

          <div className="col-12 col-md-4">
            <div style={styles.valueItem}>
              <span style={styles.valueNumber}>
                01
              </span>

              <h3 style={styles.valueTitle}>
                Attention to Detail
              </h3>

              <p style={styles.valueText}>
                Every element is carefully considered to
                deliver a refined final result.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div style={styles.valueItem}>
              <span style={styles.valueNumber}>
                02
              </span>

              <h3 style={styles.valueTitle}>
                Customer Focus
              </h3>

              <p style={styles.valueText}>
                Your ideas and requirements remain at the
                heart of every project.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div style={styles.valueItem}>
              <span style={styles.valueNumber}>
                03
              </span>

              <h3 style={styles.valueTitle}>
                Built to Last
              </h3>

              <p style={styles.valueText}>
                We focus on durable solutions that combine
                beauty and functionality.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

const styles = {
  /* ================= SECTION ================= */

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

  /* ================= HEADER ================= */

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
    fontSize: "clamp(34px, 5vw, 56px)",
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

  intro: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#777",
    fontSize: "clamp(14px, 1.5vw, 17px)",
    lineHeight: "1.7",
    marginBottom: "clamp(40px, 6vw, 70px)",
  },

  /* ================= VISUAL CARD ================= */

  visualCard: {
    width: "100%",
    minHeight: "clamp(350px, 40vw, 500px)",
    position: "relative",
    overflow: "hidden",
    borderRadius: "25px",
    background:
      "linear-gradient(145deg, #4e382a 0%, #2e211a 100%)",
    boxShadow:
      "0 20px 50px rgba(78, 56, 42, 0.20)",
  },

  decorativeCircle: {
    position: "absolute",
    width: "clamp(180px, 25vw, 320px)",
    height: "clamp(180px, 25vw, 320px)",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.12)",
    right: "-80px",
    top: "-80px",
  },

  visualContent: {
    position: "relative",
    zIndex: 2,
    height: "100%",
    minHeight: "clamp(350px, 40vw, 500px)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: "clamp(30px, 5vw, 60px)",
  },

  quoteMark: {
    color: "#c09a6b",
    fontSize: "clamp(55px, 8vw, 90px)",
    lineHeight: "0.7",
    fontFamily: "Georgia, serif",
    marginBottom: "20px",
  },

  visualTitle: {
    margin: 0,
    color: "#ffffff",
    fontSize: "clamp(25px, 3.5vw, 43px)",
    lineHeight: "1.2",
    fontWeight: "700",
  },

  visualLine: {
    width: "55px",
    height: "3px",
    backgroundColor: "#c09a6b",
    margin: "22px 0",
  },

  visualText: {
    maxWidth: "430px",
    margin: 0,
    color: "rgba(255,255,255,0.75)",
    fontSize: "clamp(13px, 1.5vw, 16px)",
    lineHeight: "1.7",
  },

  cornerNumber: {
    position: "absolute",
    bottom: "25px",
    right: "30px",
    color: "rgba(255,255,255,0.12)",
    fontSize: "55px",
    fontWeight: "800",
  },

  /* ================= CONTENT ================= */

  content: {
    padding: "clamp(5px, 2vw, 25px)",
  },

  contentLabel: {
    color: "#a47c55",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "2px",
  },

  contentTitle: {
    margin: "8px 0 18px",
    color: "#4e382a",
    fontSize: "clamp(27px, 3.5vw, 42px)",
    lineHeight: "1.2",
    fontWeight: "700",
  },

  paragraph: {
    margin: "0 0 15px",
    color: "#6f6a66",
    fontSize: "clamp(14px, 1.5vw, 16px)",
    lineHeight: "1.8",
  },

  /* ================= HIGHLIGHTS ================= */

  highlight: {
    height: "100%",
    padding: "20px 15px",
    backgroundColor: "#ffffff",
    borderRadius: "14px",
    border: "1px solid rgba(78, 56, 42, 0.08)",
    boxShadow: "0 6px 20px rgba(78, 56, 42, 0.05)",
  },

  highlightIcon: {
    width: "38px",
    height: "38px",
    margin: "0 auto 10px",
    borderRadius: "10px",
    backgroundColor: "#f3ebe5",
    color: "#a47c55",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "10px",
  },

  highlightTitle: {
    margin: "0 0 7px",
    color: "#4e382a",
    fontSize: "clamp(15px, 1.6vw, 18px)",
    fontWeight: "700",
  },

  highlightText: {
    margin: 0,
    color: "#888",
    fontSize: "12px",
    lineHeight: "1.5",
  },

  /* ================= BUTTON ================= */

  button: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "25px",
    padding: "13px 22px",
    backgroundColor: "#4e382a",
    color: "#ffffff",
    borderRadius: "10px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "700",
    boxShadow: "0 8px 20px rgba(78, 56, 42, 0.15)",
  },

  buttonArrow: {
    fontSize: "20px",
  },

  /* ================= VALUES ================= */

  values: {
    marginTop: "clamp(55px, 8vw, 100px)",
    paddingTop: "clamp(35px, 5vw, 55px)",
    borderTop: "1px solid rgba(78, 56, 42, 0.12)",
  },

  valueItem: {
    padding: "15px clamp(10px, 3vw, 35px)",
  },

  valueNumber: {
    display: "block",
    color: "#a47c55",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "2px",
    marginBottom: "8px",
  },

  valueTitle: {
    margin: "0 0 8px",
    color: "#4e382a",
    fontSize: "clamp(17px, 2vw, 21px)",
    fontWeight: "700",
  },

  valueText: {
    maxWidth: "300px",
    margin: "0 auto",
    color: "#888",
    fontSize: "13px",
    lineHeight: "1.6",
  },
};

export default AboutUs;