import Navbar from "./ALLComp/Navbar"
import './App.css'
import Home from "./ALLComp/Home"
import Contactus from "./ALLComp/Contactus";
import Offer from "./ALLComp/Offer";
import Clients from "./ALLComp/Clients";
import Projects from "./ALLComp/Projects";
import Footer from "./ALLComp/Footer";
import Aboutus from "./ALLComp/Aboutus";

function App() {
  return (
    <>
   
    <Navbar/>
    <Home/>
    <Clients/>
    <Offer/>
    <Projects/>
    <Contactus/>
    <Aboutus/>
    <Footer/>

    
    </>
  );
}

export default App;
