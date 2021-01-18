import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import Blokus from './projects/Blokus';
import Chomp from './projects/Chomp';
import PathFinding from './projects/PathFinding';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Switch} from "react-router-dom";
ReactDOM.render(
  <BrowserRouter basename={"/"}>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects/Blokus" component={Blokus} />
        <Route path="/projects/Chomp" component={Chomp} />
        <Route path="/projects/PathFinding" component={PathFinding} />
    </Switch>
  </BrowserRouter>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
