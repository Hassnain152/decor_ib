import React from "react";

const App = () => {
  const handleUpdate = () => {
    window.location.reload(true);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f5f7fb",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          background: "#fff",
          borderRadius: "16px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ fontSize: "55px", marginBottom: "15px" }}>🚀</div>

        <h2
          style={{
            margin: "0 0 10px",
            color: "#222",
            fontSize: "28px",
          }}
        >
          Update Available
        </h2>

        <p
          style={{
            color: "#666",
            lineHeight: "1.6",
            fontSize: "16px",
          }}
        >
          A new version of this application is available.
          <br />
          Your current package is outdated.
          <br />
          Please update to continue using the latest features,
          improvements, and security updates.
        </p>

        <button
          onClick={handleUpdate}
          style={{
            marginTop: "25px",
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "10px",
            background: "#2563eb",
            color: "#fff",
            fontSize: "17px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Update Now
        </button>

        <p
          style={{
            marginTop: "15px",
            fontSize: "13px",
            color: "#999",
          }}
        >
          Version update is required for the best experience.
        </p>
      </div>
    </div>
  );
};

export default App;



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
