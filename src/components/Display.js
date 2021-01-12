
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import Contacts from "../components/Contacts";
import Footer from "../components/Footer";
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
import {BrowserRouter, Route, Switch} from "react-router-dom";
/*
class CurDisplay extends React.Component {
   render(){
     return (
       <div>

            <Switch>
                <Route path="/" component={Header} exact={true} />
                <Route path="/education" component={AboutMe} />
                <Route path="/skills" component={Portfolio} />
                <Route path="/experience" component={Experience} />

            </Switch>

      </div>
    )
  }
}
*/

const CurDisplay = () =>{
    return (
        <div>
 
             <Switch>
                 <Route path="/" component={Header} exact={true} />
                 <Route path="/education" component={AboutMe} />
                 <Route path="/skills" component={Portfolio} />
                 <Route path="/experience" component={Experience} />
 
             </Switch>
 
       </div>
     )
}
export default CurDisplay;