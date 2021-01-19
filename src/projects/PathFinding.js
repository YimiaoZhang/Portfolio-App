import React from 'react'
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowRight}from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/Navbar";

// Images 
import sampleStates from "../images/pathfinding/sampleStates.PNG";
import Img00 from "../images/pathfinding/00.PNG";
import Img01 from "../images/pathfinding/01.png";
import Img02 from "../images/pathfinding/02.png";
import Img03 from "../images/pathfinding/03.png";
import Img04 from "../images/pathfinding/04.png";
import Img05 from "../images/pathfinding/05.png";
import Img06 from "../images/pathfinding/06.png";
import Img07 from "../images/pathfinding/07.png";
import Img08 from "../images/pathfinding/08.png";
import Img09 from "../images/pathfinding/09.png";
import Img10 from "../images/pathfinding/10.png";
import Img11 from "../images/pathfinding/11.png";
import Img12 from "../images/pathfinding/12.png";
import Img13 from "../images/pathfinding/13.png";
import Img14 from "../images/pathfinding/14.png";
import Img15 from "../images/pathfinding/15.png";
import Img16 from "../images/pathfinding/16.png";
import Img17 from "../images/pathfinding/17.png";
import Img18 from "../images/pathfinding/18.png";
import Img19 from "../images/pathfinding/19.png";
function PathFinding() {
    return (


      <div class="container">
        {/* Title */}
        <div class="section-header text-center">
            <h1 class="title">Improve A * search Algorithm using Jump Point Search</h1>
            <h4><a href = "https://yimiaozhang-pathfinding.netlify.app" target = "_blank">pathfinding project online</a></h4>
            <h4>Source Code <a href = "https://github.com/YimiaoZhang/JPS-pathfinding">github</a> </h4>
        </div>

        {/* Paragraph */}
        <div className = "paragraph">
            <h3>Introduction</h3>
            <p>This project aims to optimize the A* search algorithm using Jump Point Search and applied the algorithm to larger maps. We are going to test that JPS can reduce memory and improve speed for A* search algorithm on uniform-cost grid map.</p>
            <p>There are certain drawbacks of A* search algorithm, it needs to visits every neighbor around the parent node and do all the evaluation to every single node which leads to slowness and increased memory. The Jump Point Search algorithm can be used to reduce processing time and decrease memory.</p>
        </div>

        {/* Paragraph */}
        <div className = "paragraph">
            <h3>Problem Description</h3>
            <p>A* search algorithm is an algorithm that starts from a specific node of a graph and aims to find a path with the smallest cost to reach the goal node. It is implemented by generating a tree of paths from the start node and extend paths at each iteration. But there are drawbacks of the A* search algorithm, it needs to visits every neighbour around the parent node and do all the evaluation to every single node which leads to slowness and increased memory.</p> 
            <p>Jump Point Search is an optimization to the A* search algorithm for uniform-cost grids which speeds up pathfinding by “jumping over” many locations that would not be considered. The optimization is done by reducing the symmetries in the search and eliminating certain nodes that can be made about the current node’s neighbours when specific conditions are satisfied. Instead of grabbing every neighbour around the node being expanded and doing all the evaluation of them, Jump Point Search move along a direction recursively until finding a point of interest or meet an obstacle.</p>
            <p>The environment of the problem is the uniform cost grid map. Every gird of the map represents a coordinate in the map. The goal state is to find the optimal path from the starting location to the ending location. Different colours of the grid represent different terrain of the map. The path can only go through the grids with the same colour. For example, when the colour of the start point is green, then the path can only go through green grids. Also, the path search is only permitted inside the map, searching outside the map is not allowed. This project allows the path searching to move in eight directions, the cost of the cardinal move is 100, and the cost of the diagonal move is 141.</p>
            <div class="section-header text-center">
                <h5 class="section md-padding bg-grey">Screenshots of sample states of the environment</h5>
            <   img src = {sampleStates} class="section md-padding bg-grey" />
            </div>
        </div>

        {/* Paragraph */}
        <div className = "paragraph">
            <h3>Methodology</h3>
            <p>Jump Point Search eliminates lots of intermediate nodes in certain kinds of grid combinations. It
            skips nodes with those combinations that would otherwise be added to the open list and closed
            list. It also saves the time of calculation and evaluation.</p>
            <p>In Jump Point Search, you move along a direction recursively until you find a point of
            importance or find an obstacle or off the map.</p>

        </div>

        {/* Paragraph */}
        <div className = "paragraph">
        <h3>Pruning rules for horizontal/vertical moves</h3>
        <p>Prune all neighbours that can be reached optimally from other paths without going through the
          current node. The green node on the example figure below is currently being expanded.</p>
          <div class="container">
            <div class="row">
              
              <div class="col-xs-12 col-md-6">
                <div class="about-text">                 
                  <p>On the map of the figure, the green node is
                    moving to the right. There are certain
                    neighbours of the node we can ignore.</p>                 
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img01} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>
        
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>First, we prune the node of the parent.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img02} class="img-responsive" alt=""/></div> </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>Then we can prune the nodes at the upper
                    left and lower left. Because those nodes can
                    be reached optimally from the parent of the
                    green node without going through the green
                    node.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img03} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>The nodes below and above can be reached
                    optimally from the parent of the green node.
                    The cost of the path from the parent node to
                    the above node would be 2, but the cost of
                    the path that goes through green node would
                    be √2 . It is the same as the node below.
                    Therefore, we can eliminate those nodes.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img04} class="img-responsive" alt=""/> </div> </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>The node at the upper right of the green
                    node and the node at the lower right of the
                    green node can be reached from the
                    neighbouring nodes above and below. The
                    cost of going through neighbouring nodes
                    and the cost of going through the green node
                    are the same. We will assume the path going
                    through neighbouring nodes is preferable
                    and eliminate those nodes.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class ="fixedSmallImage"><img src={Img05} class="img-responsive" alt=""/></div></div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>Based on the previous evaluation, we
                    assumed that the upper right node and lower
                    right node of the green node could be
                    accessed optimally through other paths. In
                    this way, we do not have to add those nodes
                    to the open list.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img06} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>
        </div>

        {/* Paragraph */}
        <div className = "paragraph">
        <h3>Pruning rules for diagonal moves:</h3>
          <p>The principle of pruning for the diagonal moves is similar to the cardinal moves.</p>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>The node on the right map is moving
                    diagonally.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"><div class = "fixedSmallImage"><img src={Img07} class="img-responsive" alt=""/></div> </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>We can assume that the left node and node
                    below can be reached optimally through the
                    parent of the green node.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"><div class = "fixedSmallImage">  <img src={Img08} class="img-responsive" alt=""/></div> </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>We can make assumption that the upper left
                    node and the lower right node can be
                    reached more optimal through neighbours
                    rather than goes through the green node.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"><div class = "fixedSmallImage">  <img src={Img09} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <div class="about-text">
                  <p>Then we need only consider the following 3
                    neighbours: the node above, the upper right
                    node and the node on the right.</p>
                </div>
              </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedSmallImage"><img src={Img10} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>
        </div>        
          
        {/* Paragraph */}
        <div className = "paragraph">
            <h3>Forced Neighbours</h3>
            <p>In some cases, the searching path will encounter some obstacles. The forced neighbour is the
                node we are forced to consider, which would have otherwise ignored it.</p>
            <div class="container">
                <div class="row">
                <div class="col-xs-12 col-md-6">
                    <div class="about-text">
                    <p>The green node on the right side is being
                        expanded. The arrow states the travel
                        direction. The black square is an obstacle to
                        the green node. Other alternative optimal
                        paths go through the parent of the green
                        node are not able to be accessed. Then the
                        red circle node cannot be pruned.</p>
                    </div>
                </div>
                <div class="col-xs-12 col-md-6"><div class = "fixedSmallImage"> <img src={Img11} class="img-responsive" alt=""/> </div></div>
                </div>
            </div>
        </div>
        
        {/* Paragraph */}
        <div className = "paragraph">
            <h3>Pseudocode</h3>
            <p/> Jump Point Search():
            <br/>&emsp;closedList = [] 
            <br/>&emsp;openList = [startNode] 
            <br/>&emsp;While(true):
            <br/>&emsp;If (openList is empty): return fail 
            <br/>&emsp;currentNode = openList[getMinIndex] //return the node with the smallest 
            heuristic value
            <br/>&emsp;If (currentNode is goal) : return path 
            <br/>&emsp;If (currentNode is in closedList): continue 
            <br/>&emsp;closedList.add(currentNode) 
            <br/>&emsp;actions = IgnoreCertainActions(currentNode) 
            <br/>&emsp;cardinalSearch(currentNode, actions) 
            <br/>&emsp;diagonalSearch(currentNode, actions) 
            <br/>We implemented the JPS algorithm based on the A* algorithm. We use the
            searchCardinal and searchDiagonal to avoid adding every node of every direction into the open
            list. Implemented code can be found at Search_student_JPS.js file. 
        </div>

        {/* Paragraph */}
        <div className = "paragraph">
            <h3>List of heuristics used</h3>
            <p>• diagonal manhattan distance heuristic</p>
            <p>• 4 directional (cardinal) manhattan distance</p>
            <p>• 2D euclidian distance (Pythagoras)</p>
            <p>• zero heuristic</p>
        </div>
            
        {/* Paragraph */}
        <div className = "paragraph">
        <h3>Results & Discussion</h3>
          <p>We used maps with different sizes to test the Jump Point Search, including maps given on
            Assignment 2 and a larger map called “New Large Map”we added.
            Example</p>
          <p>Example results</p>
          <div class="section-header text-center">
            <h3 class="section md-padding bg-grey"></h3>
            <img src = {Img00} class="section md-padding bg-grey" />
  
          </div>
          <p>Images below are single-step process of a JPS searching</p>
          <p>The left white square is the starting point, and right white square is the goal. The
            algorithm identified the yellow squares as interesting points. Then the algorithm used heuristic
            function to identified the red squares as optimal and goes through the path. During the searching,
            the algorithm finds new interesting points and optimal red squares. It continued the search until
            the goal is in sight and find the optimal path.</p>
          <p></p>
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"><div class = "fixedImage"> <img src={Img12} class="img-responsive" alt=""/> </div></div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img13} class="img-responsive" alt=""/></div> </div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img14} class="img-responsive" alt=""/></div> </div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img15} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>

          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img16} class="img-responsive" alt=""/> </div></div>
              <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img17} class="img-responsive" alt=""/> </div></div>
            </div>
          </div>

          <p>We did a test on the larger map we created to prove that JPS is faster than A* search on
            pathfinding. According to our tests, JPS performed better than A*. The table below contains 20
            tests, including start point, goal point, heuristic function used, and running time of A* search
            algorithm and Jump Point Search.</p>
          
           
            <table class="tg">
              <tr>
                <th class="tg-1wig">Start Point</th>
                <th class="tg-1wig">Goal Point</th>
                <th class="tg-1wig">Heuristic Function</th>
                <th class="tg-1wig">Time(JPS)</th>
                <th class="tg-1wig">Time(A*)</th>
              </tr>
              <tr>
                <td class="tg-0lax">(280, 79)</td>
                <td class="tg-0lax">(36, 156)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">8.0</td>
                <td class="tg-0lax">58.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(240, 192)</td>
                <td class="tg-0lax">(167, 39)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">6.0</td>
                <td class="tg-0lax">35.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(178, 117)</td>
                <td class="tg-0lax">(292, 16)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">8.0</td>
                <td class="tg-0lax">41.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(9, 9)</td>
                <td class="tg-0lax">(246, 223)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">14.0</td>
                <td class="tg-0lax">56.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(278, 282)</td>
                <td class="tg-0lax">(14, 1)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">13.0</td>
                <td class="tg-0lax">72.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(150, 187)</td>
                <td class="tg-0lax">(295, 59)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">7.0</td>
                <td class="tg-0lax">32.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(296, 8)</td>
                <td class="tg-0lax">(245, 218)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">7.0</td>
                <td class="tg-0lax">20.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(299, 285)</td>
                <td class="tg-0lax">(144, 240)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">6.0</td>
                <td class="tg-0lax">26.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(185, 293)</td>
                <td class="tg-0lax">(82, 146)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">11.0</td>
                <td class="tg-0lax">35.0</td>
              </tr>
              <tr>
                <td class="tg-0lax">(5, 16)</td>
                <td class="tg-0lax">(245, 269)</td>
                <td class="tg-0lax">8 Direction Manhattan</td>
                <td class="tg-0lax">15.0</td>
                <td class="tg-0lax">55.0</td>
              </tr>
            </table>
          <p>JPS is able to search path on larger maps faster than A* search since A* needs to check
            many more nodes. We can clearly see that from the differences of two images below. The left
            image using A* search algorithm has more red area which indicates more nodes has been
            evaluated. The right image uses JPS, and it runs faster by reducing those nodes that need not be
            considered.</p>

            <div class="container">
              <div class="row">
                <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img18} class="img-responsive" alt=""/> </div></div>
                <div class="col-xs-12 col-md-6"> <div class = "fixedImage"><img src={Img19} class="img-responsive" alt=""/> </div></div>
              </div>
            </div>  
        </div>
          
        {/* Paragraph */}
        <div className = "paragraph">
        <h3>Conclusion</h3>
            <p>We used the Jump Point Search to optimize the A* algorithm. The test result shows that
              Jump Point Search improves the processing speed and reduces memory for A* algorithm. The
              Jump Point Search selectively expands certain nodes of the map which reduces running time and
              memory. Ignoring intermediate nodes between two jump points does not affect the resulting path
              being optimal.</p>
            <p>We found that Jump Point Search works better than A* search on larger maps. But for a
              smaller map like the maze, Jump Point Search works not very well. The reason is that JPS is
              inclined to find the forced neighbours, hence sometimes the path generated is around an obstacle.</p>
            <p>If we have more time for the project, we will figure out a way of letting JPS works better.
              For example, using different data structures to store the open list and closed list.</p>
        </div>
        </div>

    )
}

export default PathFinding
