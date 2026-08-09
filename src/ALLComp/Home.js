import React from "react";

import nav1 from "./IMGs/nav11.png";
import one from "./IMGs/1.jpg";
import seven from "./IMGs/7.jpg";
import nav2 from "./IMGs/nav22.png";

function Home() {
  const slides = [
    {
      image: nav1,
      alt: "Slide 1",
    },
    {
      image: one,
      alt: "Slide 2",
    },
    {
      image: seven,
      alt: "Slide 3",
    },
    {
      image: nav2,
      alt: "Slide 4",
    },
  ];

  return (
    <div
      id="carouselExample"
      className="carousel slide"
      data-bs-ride="carousel"
      style={styles.carousel}
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Items */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div style={styles.imageContainer}>
              <img
                src={slide.image}
                alt={slide.alt}
                style={styles.image}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
        style={styles.control}
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">Previous</span>
      </button>

      {/* Next Button */}
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
        style={styles.control}
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
        ></span>

        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

const styles = {
  carousel: {
    width: "100%",
    maxWidth: "100%",
    margin: "0 auto",
    overflow: "hidden",
  },

  imageContainer: {
    width: "100%",
    height: "clamp(220px, 50vw, 650px)",
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: "100%",
    display: "block",
    objectFit: "cover",
    objectPosition: "center",
  },

  control: {
    width: "8%",
    minWidth: "45px",
  },
};

export default Home;