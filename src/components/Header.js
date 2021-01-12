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
          <>

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
          </>
    
  )
}

export default Header;
