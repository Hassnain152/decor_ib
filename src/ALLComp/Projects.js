import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import alesa from "./IMGs/Alesa.jpg";
import blackfs from "./IMGs/Blkfashiion.jpg";
import oud from "./IMGs/Oud 3.jpg";
import four from "./IMGs/4.jpg";
import five from "./IMGs/5.jpg";
import Six from "./IMGs/6.jpg";
import seven from "./IMGs/7.jpg";
import eight from "./IMGs/8.jpg";
import Ardoor from "./IMGs/Ardoor.jpg";
import signa from "./IMGs/signa.png";
import office from "./IMGs/office.jpg";
import dmof from "./IMGs/dMof.jpeg";
import new1 from "./IMGs/n1.jpg";
import new2 from "./IMGs/n2.jpg";
import vectr from "./IMGs/Vect.jpeg";

function Projects() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const projects = [
    {
      image: new1,
      title: "Dallah Namar Hospital False",
    },
    {
      image: new2,
      title: "Interior Fit-Out",
    },
    {
      image: Ardoor,
      title: "Hashem Courts Project",
    },
    {
      image: four,
      title: "Dallah Namar Hospital",
    },
    {
      image: five,
      title: "Makkah Naseem",
    },
    {
      image: Six,
      title: "Makkah Naseem",
    },
    {
      image: seven,
      title: "DAM Dammam Office",
    },
    {
      image: eight,
      title: "Nayomi",
    },
    {
      image: dmof,
      title: "Signature Dammam Office",
    },
    {
      image: signa,
      title: "Signage Work",
    },
    {
      image: vectr,
      title: "Vectoria Secret",
      border: true,
    },
    {
      image: office,
      title: "DAM Office Dammam",
    },
    {
      image: oud,
      title: "Al Oud",
    },
    {
      image: alesa,
      title: "Al Esa",
    },
    {
      image: blackfs,
      title: "Black Fashion",
    },
  ];

  return (
    <section
      id="projects"
      style={styles.section}
    >
      <div
        className="container-fluid"
        style={styles.container}
      >
        {/* Heading */}
        <div className="row">
          <div className="col-12">
            <h1
              data-aos="zoom-in-right"
              style={styles.heading}
            >
              Our Projects
            </h1>
          </div>
        </div>

        {/* Projects */}
        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3"
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index % 4) * 100}
            >
              <div style={styles.card}>
                <div style={styles.imageWrapper}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    style={{
                      ...styles.image,
                      border: project.border
                        ? "1px solid #021a40"
                        : "none",
                    }}
                  />
                </div>

                <div style={styles.cardBody}>
                  <p style={styles.cardText}>
                    {project.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    paddingTop: "clamp(70px, 9vw, 120px)",
    paddingBottom: "clamp(50px, 8vw, 100px)",
    backgroundColor: "#ffffff",
    overflow: "hidden",
  },

  container: {
    width: "100%",
    maxWidth: "1600px",
    margin: "0 auto",
    paddingLeft: "clamp(15px, 4vw, 60px)",
    paddingRight: "clamp(15px, 4vw, 60px)",
  },

  heading: {
    width: "100%",
    margin: "0 0 clamp(25px, 5vw, 55px)",
    textAlign: "center",
    color: "#4e382a",
    fontSize: "clamp(30px, 5vw, 50px)",
    lineHeight: "1.2",
    fontWeight: "700",
  },

  card: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    overflow: "hidden",
    border: "1px solid #eeeeee",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    display: "flex",
    flexDirection: "column",
  },

  imageWrapper: {
    width: "100%",
    aspectRatio: "4 / 3",
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },

  image: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },

  cardBody: {
    width: "100%",
    minHeight: "70px",
    padding: "15px 12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },

  cardText: {
    margin: 0,
    color: "#673131",
    fontSize: "clamp(14px, 1.5vw, 17px)",
    lineHeight: "1.4",
    fontWeight: "600",
  },
};

export default Projects;