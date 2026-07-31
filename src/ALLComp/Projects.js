import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import alesa from "./IMGs/Alesa.jpg"
import blackfs from "./IMGs/Blkfashiion.jpg"
import oud from "./IMGs/Oud 3.jpg"
import four from "./IMGs/4.jpg"
import five from "./IMGs/5.jpg"
import Six from "./IMGs/6.jpg"
import seven from "./IMGs/7.jpg"
import eight from "./IMGs/8.jpg"
import Ardoor from "./IMGs/Ardoor.jpg"
import "./Projects.css";
import new4 from "./IMGs/n4.jpg"
import new33 from "./IMGs/new33.jpg"
import signa from "./IMGs/signa.png"
import inti from "./IMGs/inti.png"
import office from "./IMGs/office.jpg"
import dmof from "./IMGs/dMof.jpeg"
import new1 from "./IMGs/n1.jpg"
import new2 from "./IMGs/n2.jpg"
import new3 from "./IMGs/n3.jpg"
import vectr from "./IMGs/Vect.jpeg"




function Projects() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
      }, []);
  return (
    <>
    
    {/* style={{fontSize:50, color:"#4e382a" }} class="col-md-12 text-center"  data-aos="zoom-in" */}

    <section id='projects'>
  
           <div class="container mt-5 text-center ">
          <div class="container text-center">
        <div class="row">
        <h1 class="col-md-12 text-center"  style={{fontSize:50, color:"#4e382a" , }} data-aos="zoom-in-right">Our Projects</h1>
        </div>

           <div>
        <div class="row text-center  ">
          <div class="col-md-12 text-center mt-5">
           
          </div>
          <div class="col-md-4   mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }} //this color is for test u can change
            >
              <img   style={{width: "254.67px",height: "191px"}} 
              src={new1} class="card-img-top" />
              <div>
                <p class="card-text" style={{ color: "#673131" }}>
               Dallah Namar Hospital False
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4   mt-4 ">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={new2} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Interior Fit-Out 

                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4 ">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={Ardoor} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
              Hashem Courts Project
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="row mt-4 text-center">
          <div class="col-md-4   mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={four} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Dallah Namar Hospital
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={five} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Makkah Naseem
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
              
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img  style={{width: "254.67px",height: "191px"}}  src={Six} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Makkah Naseem
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="row mt-4 text-center">
          <div class="col-md-4  mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={seven} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                DAM Damam Office
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
              
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img  style={{width: "254.67px",height: "191px"}} src={eight} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
               Nayomi
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={dmof} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
               Signature Damam Office
                </p>
              </div>
            </div>
          </div>
        </div>


        <div class="row mt-4 text-center">
          <div class="col-md-4   mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={signa} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Signage Work

                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px", border: '1px solid #021a40'}}  src={vectr} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
             Vectoria Secret
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4">
            <div
              
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img  style={{width: "254.67px",height: "191px"}}  src={office} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
               DAM Office Damam
                </p>
              </div>
            </div>
          </div>
        </div>



        <div class="row text-center  ">
          <div class="col-md-12 text-center mt-5">
           
          </div>
          <div class="col-md-4   mt-4">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }} //this color is for test u can change
            >
              <img   style={{width: "254.67px",height: "191px"}} 
              src={oud} class="card-img-top" />
              <div>
                <p class="card-text" style={{ color: "#673131" }}>
               Al Oud
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4   mt-4 ">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={alesa} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
                Al Esa 

                </p>
              </div>
            </div>
          </div>
          <div class="col-md-4  mt-4 ">
            <div
             
              class="card  card-body rounded "
              style={{ width: "18rem" }}
            >
              <img style={{width: "254.67px",height: "191px"}}  src={blackfs} class="card-img-top" />
              <div class="card-body ">
                <p class="card-text" style={{ color: "#673131" }}>
              Black Fashion
                </p>
              </div>
            </div>
          </div>
        </div>
       


       
       
      </div>
           </div>
      



    </div>
    </section>
    </>
  )
}

export default Projects
