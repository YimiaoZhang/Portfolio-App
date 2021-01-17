import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        
        <Typed
          className="typed-text"
          strings={["Hi", 
                    "My name is Yimiao Zhang", 
                    ]}
          typeSpeed={40}
          backSpeed={60}
          
        />

      </div>
    </div>
  )
}

export default Header;
