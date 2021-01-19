import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import React, { Component, useEffect, useState, fetchData, PureComponent}from "react";
import Typed from "react-typed";
import { Link ,BrowserRouter, Route, Switch} from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import { AwesomeButton, AwesomeButtonProgress, AwesomeButtonSocial} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";
import CurDisplay from "./components/Display";



function Home() {
  const componentsMap = new Map([["AboutMe", AboutMe], ["Experience", Experience]]);
  const DynamicComponent = componentsMap.get("Experience");

    return(
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            }
          }
        }}
      />

    <div id="home" className="header-wraper">
          <div class = "container main-info row" >
              <div className = "col-lg-2 col-md-2 col-sm-2 ">
                <div className ="col" >
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                    <Link to = "/" ><AwesomeButton type = "primary" >Home</AwesomeButton></Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                    <Link to ="/education" ><AwesomeButton type="primary"  onClick={() => this.DynamicComponent = this.componentsMap.get("AboutMe")}>Education</AwesomeButton></Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                    <Link to ="/skills" ><AwesomeButton type="primary" >Skills</AwesomeButton></Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                  <Link to ="/experience" ><AwesomeButton type="primary" >Experience</AwesomeButton></Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                  <Link to ="/portfolio" ><AwesomeButton type="primary" >Projects</AwesomeButton></Link>
                  </div>
                  <div className="col-lg-2 col-md-2 col-sm-2 main-menu-btn">
                  <Link to ="/contacts" ><AwesomeButton type="primary" >Contact</AwesomeButton></Link>
                  </div>
                </div>
              </div>

              <div className = "col-lg-10 col-md-10 col-sm-10 info-panel">
                  <DynamicComponent/>
                  


              </div>
          </div>       
    </div>
      

    </>
    )
      }

export default Home;
