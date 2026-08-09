
import React from "react";

function PackageUpdateNotice() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f7fa",
        padding: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "550px",
          backgroundColor: "#ffffff",
          borderRadius: "20px",
          padding: "45px 30px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div
          style={{
            width: "70px",
            height: "70px",
            margin: "0 auto 20px",
            borderRadius: "50%",
            backgroundColor: "#fff3cd",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "32px",
          }}
        >
          ⚠️
        </div>

        <h1
          style={{
            color: "#222",
            fontSize: "30px",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          Package Update Required
        </h1>

        <p
          style={{
            color: "#666",
            fontSize: "16px",
            lineHeight: "1.7",
            marginBottom: "25px",
          }}
        >
          Your project packages are outdated.
          Please update your packages to the latest
          versions to improve performance, security,
          and compatibility.
        </p>

        <div
          style={{
            backgroundColor: "#f8f9fa",
            borderRadius: "12px",
            padding: "15px",
            marginBottom: "25px",
            textAlign: "left",
          }}
        >
          <strong style={{ color: "#333" }}>
            Recommended command:
          </strong>

          <code
            style={{
              display: "block",
              marginTop: "10px",
              padding: "12px",
              backgroundColor: "#222",
              color: "#00ff88",
              borderRadius: "8px",
              fontSize: "14px",
              overflowX: "auto",
            }}
          >
            npm update
          </code>
        </div>

        <button
          onClick={() => window.location.reload()}
          style={{
            border: "none",
            borderRadius: "10px",
            padding: "13px 28px",
            backgroundColor: "#005da7",
            color: "#fff",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Refresh After Update
        </button>
      </div>
    </div>
  );
}

export default PackageUpdateNotice;







// import Navbar from "./ALLComp/Navbar"
// import './App.css'
// import Home from "./ALLComp/Home"
// import Contactus from "./ALLComp/Contactus";
// import Offer from "./ALLComp/Offer";
// import Clients from "./ALLComp/Clients";
// import Projects from "./ALLComp/Projects";
// import Footer from "./ALLComp/Footer";
// import Aboutus from "./ALLComp/Aboutus";

// function App() {
//   return (
//     <>
//     <Navbar/>
//     <Home/>
//     <Clients/>
//     <Offer/>
//     <Projects/>
//     <Contactus/>
//     <Aboutus/>
//     <Footer/>

    
//     </>
//   );
// }

// export default App;
