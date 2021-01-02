import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2020 – present</h3>
            <h4>Software Developer</h4>
            <h6>Beaufort Solutions, St.John’s, NL</h6>
            <p> &#8226; Modified unit test for project API according to new changes and release <br />
                &#8226; Debugging applications and implementing code fixes when necessary <br />
                &#8226; Led design and development of the automation test project from scratch using Xamarin UI Test for
                        Mobile Android and iOS app <br />
                &#8226; Implemented the data verification on automation testing project using .NET API Microsoft Excel
                        Interop <br />
                &#8226; Developed and executed test plans and test cases for UAT, functional and regression testing        
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Jan 2020 – May 2020</h3>
            <h4>Game Developer (Remote)</h4>
            <h6>InOne Media, Guangzhou, China</h6>
            <p>
              &#8226;Researched and evaluated different game engines to identify the appropriate engine for the project<br/>
              &#8226;Incorporated artwork into the game<br/>
              &#8226;dialogue text and language configuration<br/>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Sep 2017 - Jan 2018</h3>
            <h4>Translator</h4>
            <h6>Publishing House of Electronics Industry, Beijing, China</h6>
            <p>
              &#8226;Translated publications from English into Chinese<br/>
              &#8226;Collaborated with team to complete client translation projects by deadline<br/>
              &#8226;Publication: (2007). Introduction to Game Design, Prototyping, and Development. Beijing: PHEI
              Press<br/>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2017 - Aug 2017</h3>
            <h4>Translation Editor</h4>
            <h6>GamerSky, HeBei, China</h6>
            <p>
              &#8226;Translated gaming news from English into Chinese<br/>
              &#8226;Edited and loaded images and video along with relevant release documentation into digital archive
management system<br/>
              &#8226;Collaborated with editorial teams and IT department on delivering news<br/>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>May 2016</h3>
            <h4>Personal Banker Intern</h4>
            <h6>China Construction Bank,   Harbin, China</h6>
            <p>
              &#8226;Responded to all customer queries and issues after performing appropriate research<br/>
              &#8226;Conducted individual financial analysis to determine appropriate loan and credit options<br/>
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Dec 2015 – Feb 2016</h3>
            <h4>Intern</h4>
            <h6>Nanhua Futures,   Harbin, China</h6>
            <p>
            &#8226;Identified any issues that may arise related to the market<br/>
            &#8226;Market analysis and cost analysis<br/>
            &#8226;Simulated trading<br/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience;
