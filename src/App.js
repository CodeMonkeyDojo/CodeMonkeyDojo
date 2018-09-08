import React, { Component } from 'react';
import logo from './resources/logo.gif';
import './App.css';
//testing components jose t
//my name is PETE and i like to eat alot

import {BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css"
import "./index.css"

import Home from "./components/Home"
import About from "./components/About"
import Forum from "./components/Forum";
import TutorialText from "./components/TutorialText";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import VideoComponent from "./components/VideoPlayer"
import SubmitTutorial from "./components/SubmitTutorial"


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
      <Navigation />

      <Switch>

     <Route path = "/" component = {Home} exact />
      <Route path = "/about" component = {About} />
      <Route path = "/Forum" component = {Forum} />
      <Route path = "/TutorialText" component = {TutorialText} />
      <Route path = "/SubmitTutorial" component = {SubmitTutorial} />
      <Route component = {Error} />

    </Switch>

  </div>


      </BrowserRouter>

    );
  }
}

export default App;
