import React from "react";
import author from "../me.jpg";

const AboutMe = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="about-heading">Education</h2>
          <p className = "eduction-info">
              <h5>Memorial University of Newfoundland, Canada</h5>
              <h6>Bachelor of Science in Computer Science in Progress </h6>
              <h5>Harbin Institute of Technology, China</h5>
              <h6>Bachelor of Economics in Finance  </h6>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
