import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
// import "./AboutUs.css";

const AboutUs = () => {
     useEffect(() => {
            Aos.init({ duration: 2000 });
          }, []);
  return (
    <section  id="Aboutus">
      <div className="container text-center">
      <h1 style={{fontSize:50, color:"#4e382a"}} class="col-md-12 text-center"  data-aos="zoom-in-left">About Us</h1>
        <div class="col-md-12">
        <p className="description">
         <b>Welcome</b>  to our company! We specialize in creating bespoke furniture and exquisite decorations that transform your spaces into masterpieces. Our commitment to quality, craftsmanship, and customer satisfaction has been the cornerstone of our <b>success</b>.
        </p>
        <p className="mission">
          Whether you are looking to revamp your living room or add a touch of elegance to your office, we are here to make your vision come to life. Experience the <b>perfect</b>  blend of functionality and style with our unique creations.
        </p>
        </div>
        
      </div>
    </section>
  );
};

export default AboutUs;
