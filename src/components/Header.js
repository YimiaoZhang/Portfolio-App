import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Rectangle, Circle, Ellipse, Line, Polyline, CornerBox, Triangle} from 'react-shapes';
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from 'react-awesome-button';
import "react-awesome-button/dist/styles.css";

const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div class = "container main-info row" >

          <div className = "col-lg-2 col-md-2 col-sm-2 ">
            <div className ="col" >
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Home</AwesomeButton>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Education</AwesomeButton>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Skills</AwesomeButton>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Experience</AwesomeButton>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Projects</AwesomeButton>
              </div>
              <div className="col-lg-2 col-md-4 col-sm-6">
                <AwesomeButton type="primary">Contact</AwesomeButton>
              </div>
            </div>
          </div>

          <div className = "col-lg-10 col-md-10 col-sm-10 info-panel">
            <canvas></canvas>

            <h1></h1>
            <Typed
              className="typed-text"
              strings={["Hi there!", 
                        "My name is Yimiao Zhang", 
                        ]}
              typeSpeed={40}
              backSpeed={60}
                        
            />
            
            <div className = "social-link">
              <a className = "link" target="_blank" href="https://github.com/YimiaoZhang">           
                <button type="button" class="btn">
                  <FontAwesomeIcon className="icon" icon={faGithub} size="3x" /> 
                </button>
              </a>
                
              <a className = "link" target="_blank" href="https://www.linkedin.com/in/Sloane-Zhang/">
                <button type="button" class="btn">
                  <FontAwesomeIcon className="icon" icon={faLinkedin} size="3x" /> 
                </button>
              </a>
            </div>
          </div>




        </div>
 






        
        
      </div>
      
      

    
  )
}

export default Header;
