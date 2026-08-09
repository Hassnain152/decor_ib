import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import lopo from "./IMGs/49643.jpg";
import whtsapp from "./IMGs/bbv.png";

function Contactus() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const googleMapsUrl =
    "https://maps.app.goo.gl/WFCBSiLiaEgiCbXy8?g_st=ic";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add EmailJS or your backend here later
    console.log("Form submitted:", formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="Contactus" style={styles.section}>
      <div className="container" style={styles.container}>

        {/* ================= HEADING ================= */}

        <div className="row">
          <div className="col-12 text-center">
            <div data-aos="fade-down">
              <span style={styles.smallTitle}>
                GET IN TOUCH
              </span>

              <h1 style={styles.heading}>
                Contact Us
              </h1>

              <div style={styles.headingLine}></div>

              <p style={styles.subtitle}>
                Let's talk about everything!
                <br />
                We would love to hear from you and discuss your next project.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CONTACT CONTENT ================= */}

        <div className="row g-4 g-lg-5 align-items-stretch mt-3">

          {/* ================= IMAGE / INFO ================= */}

          <div
            className="col-12 col-lg-6"
            data-aos="fade-right"
          >
            <div style={styles.infoCard}>

              <div style={styles.imageWrapper}>
                <img
                  src={lopo}
                  alt="Our company"
                  style={styles.image}
                />

                <div style={styles.imageOverlay}>
                  <h2 style={styles.imageTitle}>
                    Let's Work Together
                  </h2>

                  <p style={styles.imageText}>
                    Have a project in mind? Get in touch with our team
                    and let's turn your ideas into reality.
                  </p>
                </div>
              </div>

              {/* Contact information */}

              <div style={styles.contactInfo}>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.infoItem}
                >
                  <div style={styles.iconBox}>
                    📍
                  </div>

                  <div>
                    <h5 style={styles.infoTitle}>
                      Our Location
                    </h5>

                    <p style={styles.infoText}>
                      View our location on Google Maps
                    </p>
                  </div>
                </a>

                <a
                  href="https://wa.me/923176279223"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.infoItem}
                >
                  <div style={styles.iconBox}>
                    💬
                  </div>

                  <div>
                    <h5 style={styles.infoTitle}>
                      WhatsApp
                    </h5>

                    <p style={styles.infoText}>
                      +92 317 6279223
                    </p>
                  </div>
                </a>

              </div>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}

          <div
            className="col-12 col-lg-6"
            data-aos="fade-left"
          >
            <div style={styles.formCard}>

              <div style={styles.formHeader}>
                <span style={styles.formSmallTitle}>
                  SEND US A MESSAGE
                </span>

                <h2 style={styles.formTitle}>
                  Have a question?
                </h2>

                <p style={styles.formDescription}>
                  Fill out the form below and our team will get back
                  to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit}>

                {/* Name */}

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Your Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    required
                    style={styles.input}
                  />
                </div>

                {/* Email */}

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    style={styles.input}
                  />
                </div>

                {/* Subject */}

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Subject
                  </label>

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is your project about?"
                    required
                    style={styles.input}
                  />
                </div>

                {/* Message */}

                <div style={styles.inputGroup}>
                  <label style={styles.label}>
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message..."
                    required
                    rows="5"
                    style={{
                      ...styles.input,
                      resize: "vertical",
                      minHeight: "130px",
                    }}
                  />
                </div>

                {/* Submit */}

                <button
                  type="submit"
                  style={styles.submitButton}
                >
                  Send Message
                  <span style={styles.arrow}>
                    →
                  </span>
                </button>

              </form>
            </div>
          </div>
        </div>

        {/* ================= MAP ================= */}

        <div
          style={styles.mapSection}
          data-aos="fade-up"
        >
          <div className="text-center">
            <span style={styles.smallTitle}>
              FIND US
            </span>

            <h2 style={styles.mapTitle}>
              Locate Us
            </h2>

            <div style={styles.headingLine}></div>
          </div>

          <div style={styles.mapWrapper}>
            <iframe
              title="Our Location"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.6423818528565!2d46.71338467536034!3d24.53245397814491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMxJzU2LjgiTiA0NsKwNDInNTcuNSJF!5e0!3m2!1sen!2ssa!4v1735027877891!5m2!1sen!2ssa"
              style={styles.map}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>

      {/* ================= FLOATING WHATSAPP ================= */}

      <a
        href="https://wa.me/923176279223"
        target="_blank"
        rel="noopener noreferrer"
        style={styles.whatsapp}
        aria-label="Contact us on WhatsApp"
      >
        <img
          src={whtsapp}
          alt="WhatsApp"
          style={styles.whatsappImage}
        />

        <span style={styles.whatsappText}>
          Chat with us
        </span>
      </a>

    </section>
  );
}


/* =====================================================
   STYLES
===================================================== */

const styles = {

  section: {
    width: "100%",
    background:
      "linear-gradient(180deg, #ffffff 0%, #faf7f4 100%)",
    paddingTop: "clamp(70px, 9vw, 120px)",
    paddingBottom: "clamp(60px, 8vw, 110px)",
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  smallTitle: {
    display: "inline-block",
    color: "#a47c55",
    fontSize: "clamp(11px, 1.2vw, 13px)",
    fontWeight: "800",
    letterSpacing: "3px",
    marginBottom: "10px",
  },

  heading: {
    margin: 0,
    color: "#4e382a",
    fontSize: "clamp(34px, 5vw, 56px)",
    lineHeight: "1.15",
    fontWeight: "700",
  },

  headingLine: {
    width: "60px",
    height: "3px",
    backgroundColor: "#a47c55",
    margin: "18px auto",
    borderRadius: "10px",
  },

  subtitle: {
    maxWidth: "650px",
    margin: "0 auto",
    color: "#777",
    fontSize: "clamp(14px, 1.5vw, 17px)",
    lineHeight: "1.7",
  },

  /* Image card */

  infoCard: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    overflow: "hidden",
    boxShadow: "0 15px 45px rgba(78, 56, 42, 0.10)",
    border: "1px solid rgba(78, 56, 42, 0.08)",
  },

  imageWrapper: {
    width: "100%",
    height: "clamp(280px, 35vw, 430px)",
    position: "relative",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },

  imageOverlay: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    padding: "clamp(25px, 4vw, 45px)",
    background:
      "linear-gradient(transparent, rgba(30, 20, 15, 0.9))",
    color: "#ffffff",
  },

  imageTitle: {
    margin: "0 0 8px",
    fontSize: "clamp(22px, 3vw, 32px)",
    fontWeight: "700",
  },

  imageText: {
    margin: 0,
    maxWidth: "500px",
    fontSize: "clamp(13px, 1.5vw, 16px)",
    lineHeight: "1.6",
    opacity: 0.9,
  },

  contactInfo: {
    padding: "clamp(20px, 3vw, 30px)",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  infoItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    padding: "12px",
    borderRadius: "12px",
    textDecoration: "none",
    transition: "0.2s",
  },

  iconBox: {
    width: "48px",
    height: "48px",
    minWidth: "48px",
    borderRadius: "12px",
    backgroundColor: "#f3ebe5",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "21px",
  },

  infoTitle: {
    margin: "0 0 3px",
    color: "#4e382a",
    fontSize: "15px",
    fontWeight: "700",
  },

  infoText: {
    margin: 0,
    color: "#777",
    fontSize: "13px",
  },

  /* Form */

  formCard: {
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "22px",
    padding: "clamp(25px, 4vw, 45px)",
    boxShadow: "0 15px 45px rgba(78, 56, 42, 0.10)",
    border: "1px solid rgba(78, 56, 42, 0.08)",
  },

  formHeader: {
    marginBottom: "25px",
  },

  formSmallTitle: {
    color: "#a47c55",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "2px",
  },

  formTitle: {
    color: "#4e382a",
    fontSize: "clamp(25px, 3vw, 34px)",
    fontWeight: "700",
    margin: "7px 0",
  },

  formDescription: {
    margin: 0,
    color: "#777",
    fontSize: "14px",
    lineHeight: "1.6",
  },

  inputGroup: {
    marginBottom: "17px",
  },

  label: {
    display: "block",
    color: "#4e382a",
    fontSize: "13px",
    fontWeight: "700",
    marginBottom: "7px",
  },

  input: {
    width: "100%",
    boxSizing: "border-box",
    border: "1px solid #e4ddd8",
    borderRadius: "10px",
    padding: "13px 15px",
    outline: "none",
    backgroundColor: "#faf9f8",
    color: "#333",
    fontSize: "14px",
    transition: "0.2s",
  },

  submitButton: {
    width: "100%",
    border: "none",
    borderRadius: "10px",
    padding: "14px 20px",
    backgroundColor: "#4e382a",
    color: "#ffffff",
    fontSize: "15px",
    fontWeight: "700",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    marginTop: "5px",
  },

  arrow: {
    fontSize: "20px",
  },

  /* Map */

  mapSection: {
    marginTop: "clamp(60px, 8vw, 100px)",
  },

  mapTitle: {
    margin: 0,
    color: "#4e382a",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: "700",
  },

  mapWrapper: {
    width: "100%",
    marginTop: "25px",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 15px 40px rgba(78, 56, 42, 0.12)",
    border: "5px solid #ffffff",
  },

  map: {
    width: "100%",
    height: "clamp(300px, 40vw, 500px)",
    display: "block",
    border: 0,
  },

  /* WhatsApp */

  whatsapp: {
    position: "fixed",
    right: "clamp(15px, 3vw, 35px)",
    bottom: "clamp(15px, 3vw, 30px)",
    zIndex: 999,
    width: "clamp(52px, 5vw, 62px)",
    height: "clamp(52px, 5vw, 62px)",
    borderRadius: "50%",
    backgroundColor: "#25D366",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.25)",
    textDecoration: "none",
  },

  whatsappImage: {
    width: "65%",
    height: "65%",
    objectFit: "contain",
  },

  whatsappText: {
    position: "absolute",
    right: "75px",
    whiteSpace: "nowrap",
    backgroundColor: "#4e382a",
    color: "#ffffff",
    padding: "8px 13px",
    borderRadius: "8px",
    fontSize: "12px",
    fontWeight: "600",
    opacity: 0,
    pointerEvents: "none",
  },
};

export default Contactus;