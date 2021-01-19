import React from "react";
// Images
import blokusCover from "../images/Blokus/blokus-cover.jpg"
import chompCover from "../images/Chomp/chomp-cover.jpg"
import pathFindingCover from "../images/pathfinding/pathfinding-cover.jpg"
import netflix from "../images/netflix.png";
import cityGuide from "../images/city-guide-app.png";
import portfolio from "../images/portfolio.png";
import taskManager from "../images/task-manager.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";


// Project Pages
import {Link } from "react-router-dom"; 
const Pofrfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/netflix-project")}>https://github.com/8020Coding/netflix-project</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://city-guide-app-project.herokuapp.com/", "_blank")}>https://city-guide-app-project.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/city-guide-app", "_blank")}>https://github.com/8020Coding/city-guide-app</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://portfolio-rea-and-material-ui.herokuapp.com/", "_blank")}>https://portfolio-rea-and-material-ui.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/portfilio", "_blank")}>https://github.com/8020Coding/portfilio</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Poftfolio React and Material UI project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex cumque illo est expedita quos adipisci suscipit unde itaque qui perferendis.</p>
        <b>Demo:</b> <a className="hyper-link" onClick={() => window.open("https://react-redux-task-manager.herokuapp.com/", "_blank")}>https://react-redux-task-manager.herokuapp.com/</a>
        <br />
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/8020Coding/task-manager", "_blank")}>https://github.com/8020Coding/task-manager</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Task Manager React and Redux project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" class="section md-padding bg-grey">
      <div className="container">

        <h1 className="text-uppercase text-center py-5">Project</h1>
        <div className="row">
          {/* - */}

          <div class="col-md-4 col-xs-6 work">
            <img className="portfolio-image" src={blokusCover} alt="Blokus Project"/>
            
            <div class="overlay"></div>
            <div class="work-content">
              <span>Java</span>
              <h3>Blokus</h3>
              <div class="work-link">
              <Link to="/projects/Blokus" target = "_blank" ><FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
              </div>
            </div>
				  </div>

          <div class="col-md-4 col-xs-6 work">
            <img className="portfolio-image" src={chompCover} alt="ChompProject"/>
            <div class="overlay"></div>
            <div class="work-content">
              <span>Java</span>
              <h3>Chomp</h3>
              <div class="work-link">
                <Link to="/projects/Chomp" target = "_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
              </div>
            </div>
				  </div>

          <div class="col-md-4 col-xs-6 work">
            <img className="portfolio-image" src={pathFindingCover} alt="Pathfinding Project"/>
            <div class="overlay"></div>
            <div class="work-content">
              <span>javascript</span>
              <h3>Pathfinding</h3>
              <div class="work-link">
                <Link to="/projects/PathFinding" target = "_blank"><FontAwesomeIcon icon={faExternalLinkAlt} /></Link>
              </div>
            </div>
				  </div>
        </div>
      </div>

    </div>

  )
}

export default Pofrfolio;
