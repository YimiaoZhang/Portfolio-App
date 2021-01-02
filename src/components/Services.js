import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faDesktop, faFileCode, faLanguage, faTools } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">Skills</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faFileCode} size="2x" /></div>
              <h3>Programming Language</h3>
              <p>C#, C++, Python, Java, JavaScript</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faDesktop} size="2x" /></div>

              <h3>Others</h3>
              <p>Unity, SFML, Xamarin, Xamarin UI Test, NodeJS, MongoDB, React</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faLanguage} size="2x" /></div>

              <h3>Language</h3>
              <p>English, Chinese, Japanese</p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle"><FontAwesomeIcon className="icon" icon={faTools} size="2x" /></div>

              <h3>Software</h3>
              <p>Microsoft Access, SPSS, Adobe Premiere Pro</p>.
              </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Services;
