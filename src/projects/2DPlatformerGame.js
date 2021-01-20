import React from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight}from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import { Divider } from 'semantic-ui-react';

import ImgMainMenu from"../images/2DPlatform/mainmenu.png";
import ImgLevel from"../images/2DPlatform/level.png";
import ImgSettingMenu from"../images/2DPlatform/settingMenu.png";
import ImgLevelEditor from"../images/2DPlatform/levelEditor.png";
import ImgOvermapScene from"../images/2DPlatform/OvermapScene.png";
import ImgFinalBoss from"../images/2DPlatform/finalBoss.png";
function Platformer() {
    return (
      <div class = "project">
        <div class="container">
          <div class="section-header text-center">
            <h1 class="title">2D Platformer Game</h1>
            <h4 class="project-link">Source Code <a href = "https://github.com/YimiaoZhang/Chomp">github</a> </h4>
          </div>
          <Divider/>
          <p>A 2D pixel platform game using C++ and SFML library</p>
          <h3 class="project-link" > <a href = "https://youtu.be/7TpCBLA2XOQ" target = "_blank">Trailor</a></h3>
          <h3>Implementation</h3>
          <p>Movement, collision, multiple weapons and items, inventory, NPC with the following and patrol behaviour, moving tiles, multiple status effect, lighting effect, gravity, two camera view (position lock and camera zone), game progression saving and loading, parallax background, sound effects, options menu that can change the conﬁguration, level editor.</p>
                  
          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Main Menu</h5>
            <img src = {ImgMainMenu} class="section md-padding bg-grey" />
          </div>

          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Level Scene</h5>
            <img src = {ImgLevel} class="section md-padding bg-grey" />
          </div>

          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Setting Menu</h5>
            <img src = {ImgSettingMenu} class="section md-padding bg-grey" />
          </div>

          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Level Editor</h5>
            <img src = {ImgLevelEditor} class="section md-padding bg-grey" />
          </div>

          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Overmap Scene</h5>
            <img src = {ImgOvermapScene} class="section md-padding bg-grey" />
          </div>

          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey">Final Boss Scene</h5>
            <img src = {ImgFinalBoss} class="section md-padding bg-grey" />
          </div>

        </div>
      </div>
    )
}

export default Platformer
