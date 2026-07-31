import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

const Footer = () => {
   useEffect(() => {
          Aos.init({ duration: 2000 });
        }, []);
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <h3 className="text-center mb-4">Follow Us on Social Media</h3>
        <div className="row justify-content-center">
          {/* Facebook */}
          <div className="col-auto">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook}  size="2x" bounce />


              
            </a>
          </div>

          {/* Instagram */}
          <div className="col-auto">
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-danger"
              aria-label="Instagram"
            >
              
              <FontAwesomeIcon icon={faInstagram}  size="2x" bounce />
            </a>
          </div>

          {/* WhatsApp */}
          <div className="col-auto">
          <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" bounce />
</a>

          </div>

          

        </div>
        <p className="text-center mt-4">&copy; 2024 Shirka Ghala Ibrahim. All rights reserved.</p>
        <p class="text-center">design by HASSNAIN </p>
      </div>
    </footer>
  );
};

export default Footer;




























// without bootstrap
// import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
// import "./Footer.css"; // Optional: Add custom CSS if needed

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-content">
//         <h1>Follow Us on Social Media</h1>
//         <div className="social-links">
//           {/* Facebook */}
//           <a
//             href="https://www.facebook.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link facebook"
//           >
//             <FontAwesomeIcon icon={faFacebook} size="2x" />
//           </a>

//           {/* Instagram */}
//           <a
//             href="https://www.instagram.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link instagram"
//           >
//             <FontAwesomeIcon icon={faInstagram} size="2x" />
//           </a>

//           {/* WhatsApp */}
//           <a
//             href="https://wa.me/1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="social-link whatsapp"
//           >
//             <FontAwesomeIcon icon={faWhatsapp} size="2x" />
//           </a>
//         </div>
//         <p>&copy; 2024 Your Company Name. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
