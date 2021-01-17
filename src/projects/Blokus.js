import React from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight}from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";
import ImgMainMenu from "../images/Blokus/Main menu.PNG";
import ImgSettingMenu from "../images/Blokus/settingMenu.PNG";
import ImgGamePlay from "../images/Blokus/gamePlay.PNG";
import ImgScore    from "../images/Blokus/score.PNG";
function Blokus () {
    return (

            <div class="container" >
                <div class="section-header text-center" > 
                    <h1 class="title">Blokus</h1> 
                    <h4>Source Code <a href = "https://github.com/YimiaoZhang/Blokus">github</a> </h4>
             
                </div>
                <h3>Introduction</h3>  
                <p>Blokus is an abstract strategy board game for two to four players, where players try to score points by occupying most of the board with pieces of their colour. It was invented by Bernard Tavitian and first released in 2000 by Sekkoïa, a French company. It has won several awards, including the Mensa Select award and the 2004 Teacher's Choice Award. In 2009, the game was sold to Mattel.</p>
                <h3>GamePlay</h3> 
                <p>The game is played on a square board divided into 20 rows and 20 columns, for a total of 400 squares. There are a total of 84 game tiles, organized into 21 shapes in each of four colors: blue, yellow, red and green. The 21 shapes are based on free polyominoes of from one to five squares (one monomino, one domino, two trominoes/triominoes, five tetrominoes, and 12 pentominoes). The standard rules of play for all variations of the game are as follows:
                <li>Order of play is based on the color of pieces: blue, yellow, red, green.</li>
                <li>The first piece played of each color is placed in one of the board's four corners. Each new piece played must be placed so that it touches at least one piece of the same color, with only corner-to-corner contact allowed—edges cannot touch. However, edge-to-edge contact is allowed when two pieces of different color are involved.</li>
                <li>When a player cannot place a piece, he or she passes, and play continues as normal. The game ends when no one can place a piece.</li>
                    When a game ends, the player with the highest score wins. The score is based on the number of squares in each player's pieces on the board (e.g. a tetromino is worth 4 points). A player who played all of his or her pieces is awarded a +20 point bonus if the last piece played was a monomino, or a +15 point bonus for any other piece.</p>
                <a href = "../resources/Blokus Instructions.pdf" download>View Blokus Instructions</a>
                

                <div class="section-header"> 
                    <h5 class="section md-padding ">Main Menu</h5>
                    <img src = {ImgMainMenu} class="section md-padding bg-grey" />
                </div>
                
                <div class="section-header ">
                    <h5 class="section md-padding ">Setting Menu</h5>
                    <img src = {ImgSettingMenu} class="section md-padding bg-grey" />
                </div>
                <div class="section-header ">
                    <h5 class="section md-padding ">Gameplay</h5>
                    <img src = {ImgGamePlay} class="section md-padding bg-grey" />
                </div>
                <div class="section-header ">
                    <h5 class="section md-padding ">Score</h5>
                    <img src = {ImgScore} class="section md-padding bg-grey" />
                </div>
            </div>


    );
}

export default Blokus
