import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import lopo from "./IMGs/49643.jpg"
import whtsapp from"./IMGs/bbv.png";
import "./whtsap.css"
function Contactus() {
  const googleMapsUrl = `https://maps.app.goo.gl/WFCBSiLiaEgiCbXy8?g_st=ic`;
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
    <section id="Contactus">
      <div class="container mt-5 " >
        <h1
          class="col-md-12 text-center"
          style={{fontSize:50, color:"#4e382a"}}
          data-aos="zoom-in-right"
        >
          Contact Us
        </h1>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="row justify-content-center">
              <div class="col-md-6">
                <h3 class="heading mt-4">Let's talk about everything!</h3>
                {/* <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptas debitis, fugit natus?
                </p> */}

                <p>
                  <img
                    data-aos="zoom-in"
                    src={lopo}
                    alt="Image"
                    class="img-fluid text-center"
                  />
                </p>
              </div>
              <div class="col-md-6">
                <form
                  class="mb-5"
                  method="post"
                  id="contactForm"
                  name="contactForm"
                >
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="name"
                        id="name"
                        placeholder="Your name"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <input
                        type="text"
                        class="form-control"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12 form-group mt-3">
                      <textarea
                        class="form-control"
                        name="message"
                        id="message"
                        cols="30"
                        rows="7"
                        placeholder="Write your message"
                      ></textarea>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 mt-3">
                      <input
                        data-aos="zoom-in"
                        style={{ backgroundColor: "#4e382a",color:"white" }}
                        type="submit"
                        value="Send Message"
                        class="btn  rounded-4 py-2 px-4"
                      />
                      <span class="submitting"></span>
                    </div>
                  </div>
                </form>

                <div id="form-message-warning mt-4"></div>
                
              </div>
            </div>
          </div>
        </div>
      <div class ="row text-center">
      <h1 style={{ color:"#4e382a"}}  data-aos="zoom-in-right">Locate Us</h1>
       
      </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3629.6423818528565!2d46.71338467536034!3d24.53245397814491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDMxJzU2LjgiTiA0NsKwNDInNTcuNSJF!5e0!3m2!1sen!2ssa!4v1735027877891!5m2!1sen!2ssa"
        style={{ width:"100%" ,height:"450" , allowfullscreen:"1" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} ></iframe>

        <div className="call">
        <a href="https://wa.me/+923176279223 ">
          <img class="text-center" style={{ width: 50 }} src={whtsapp}  />
        </a>
        <p style={{ fontWeight: "bold", color: "black" }}></p>
      </div>
      </div>
      </section>
    </>

  
  );
}

export default Contactus;




// import React, { useState } from "react";
// import emailjs from "emailjs-com";

// const ContactUs = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs
//       .send(
//         "YOUR_SERVICE_ID", // Replace with your EmailJS Service ID
//         "YOUR_TEMPLATE_ID", // Replace with your EmailJS Template ID
//         formData,           // Pass form data directly
//         "YOUR_USER_ID"      // Replace with your EmailJS User ID
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//           setFormData({ name: "", email: "", message: "" }); // Reset form
//         },
//         (error) => {
//           alert("Failed to send message. Please try again.");
//         }
//       );
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto" }}>
//       <h2>Contact Us</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Message:</label>
//           <textarea
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="submit">Send Message</button>
//       </form>
//     </div>
//   );
// };

// export default ContactUs;