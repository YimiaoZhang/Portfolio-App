import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";


const Header = () => {
  return (
    <div id="home" className="header-wraper">
      <div className="main-info">
        <canvas></canvas>
        <h1>Hi! My name is Yimiao Zhang</h1>
        <Typed
          className="typed-text"
          strings={["I have degree in both Finance and Computer Science", 
                    "I love solving problems", 
                    "I love game development", "I love learning new languages"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <Link smooth={true} to="contacts" offset={-150} className="btn-main-offer">contact me</Link>
      </div>
    </div>
  )
}

export default Header;
