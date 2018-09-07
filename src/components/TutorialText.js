import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import VideoComponent from "./VideoPlayer.js"
import Footer from "./footer"

const TutorialText = () => {
  return(
  <div>
<p> TutorialText </p>

<VideoComponent />
<Footer />
</div>
);
}
export default TutorialText;
