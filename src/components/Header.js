import React from "react";
import Typed from "react-typed";
import { faGithubAlt, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; 
import { AwesomeButton } from "react-awesome-button";
import 'react-awesome-button/dist/styles.css';
const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        
        <Typed
          className="typed-text"
          strings={["Hi there!", 
                    "I'm Yimiao Zhang", 
                    "Learn more about me ↓"
                    ]}
          typeSpeed={40}
          backSpeed={60}
        />
        <div className = "row">
          <a href="https://github.com/YimiaoZhang" target = "_blank" >
            <AwesomeButton type="primary">
              <FontAwesomeIcon className="icon" icon={faGithubAlt} size="2x"/>
            </AwesomeButton>
          </a>
          <a href="https://www.linkedin.com/in/sloane-zhang/" target = "_blank" >
            <AwesomeButton type="secondary">
              <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x"/>
            </AwesomeButton>
          </a>
        </div>

      </div>
    </div>
  )
}

export default Header;
