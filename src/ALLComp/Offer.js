import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";


function Offer() {
    
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
     
  return (
    <section id ="offer">
      <div data-aos="flip-up"> 
    <div class="container text-center mt-5">
        <div class="row">
        <h1 style={{fontSize:50, color:"#4e382a"}} class="col-md-12 text-center"  data-aos="zoom-in-left">What We Offer</h1>
            <div/>
       
       <div  class="col-md-4">
        <h3  style={{color:"#4e382a"}}>➤ Elevator Cladding</h3>
       </div>
       <div class="col-md-4">
        <h3  style={{color:"#4e382a"}}>➤ Wood Work</h3>
       </div>
       <div class="col-md-4">
        <h3   style={{color:"#4e382a"}} >➤ Wall Cladding</h3>
       </div>

            
    
      
    </div>

    <div class="row">
        
            <div/>
       
       <div  class="col-md-4">
        <h3  style={{color:"#4e382a"}} >➤ Wooden Counter</h3>
       </div>
       <div class="col-md-4">
        <h3  style={{color:"#4e382a"}}>➤ Wooden Hidden Door</h3>
       </div>
       <div class="col-md-4">
        <h3   style={{color:"#4e382a"}} >➤ Wood Cieling</h3>
       </div>

            
    
      
    </div>

    <div class="row">
        
            <div/>
       
       <div  class="col-md-4">
        <h3  style={{color:"#4e382a"}}>➤ decorative Partition</h3>
       </div>
       <div class="col-md-4">
        <h3  style={{color:"#4e382a"}}>➤ Wood Sliding Door</h3>
       </div>
       <div class="col-md-4">
        <h3   style={{color:"#4e382a"}} >➤ Tv Console</h3>
       </div>

            
    
      
    </div>





    </div>
    </div>
    </section>
  )
}

export default Offer
