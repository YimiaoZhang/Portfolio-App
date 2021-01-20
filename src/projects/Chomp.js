import React from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight}from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import ImgGamePlay from"../images/Chomp/gameplay.PNG";
import { Divider } from 'semantic-ui-react';
function Chomp() {
    return (
      <div class = "project">
        <div class="container">
          <div class="section-header text-center">
            <h1 class="title">Chomp</h1>
            <h4 class="project-link">Source Code <a href = "https://github.com/YimiaoZhang/Chomp">github</a> </h4>
          </div>
          <Divider/>
          <p>A java program that lets user play the game of Chomp against the computer</p>
          <h3>Game Introduction</h3>
          <p>Chomp is a two-player strategy game played on a rectangular chocolate bar made up of smaller square blocks (cells). The players take it in turns to choose one block and "eat it" (remove from the board), together with those that are below it and to its right. The top left block is "poisoned" and the player who eats this loses.</p>
          
          <h3>Instruction</h3>
          <p>1. open the console</p>
          <p>2. compile the code: javac *.java</p>
          <p>3. run the code: java Game</p>
          <h3>Game Instructions</h3> 
          <p>The program randomly decides who(user or computer) goes first. The game informs user when it's user's turn. </p>
          <p>1. Select a piece of chocolate, then all the chocolate below and to the right will be gone. </p>
              
              <p>2. Computer will select a piece of chocolate.</p>
              <p>3. The player who eats the top left block loses.</p>

          
          <div class="section-header text-center">
            <h5 class="section md-padding bg-grey entity-title">Screenshots</h5>
            <img src = {ImgGamePlay} class="section md-padding bg-grey screenshotImg" />
          </div>
  
        </div>
      </div>
    )
}

export default Chomp
