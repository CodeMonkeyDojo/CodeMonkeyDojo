import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import VideoComponent from "./VideoPlayer.js"
import Footer from "./footer"

  // handleSubmit(event) {
  //     event.preventDefault()
  //
  //     var data = {
  //         name: this.state.name,
  //         description: this.state.description,
  //         additional_desc: this.state.additional_desc
  //     }
  //     console.log(data)
  //
  //     fetch("/Tutorial/new", {
  //         method: 'POST',
  //         headers: {'Content-Type': 'application/json'},
  //         body: JSON.stringify(data)
  //     }).then(function(response) {
  //         if (response.status >= 400) {
  //           throw new Error("Bad response from server");
  //         }
  //         return response.json();
  //     }).then(function(data) {
  //         console.log(data)
  //         if(data == "success"){
  //            this.setState({msg: "Thanks for registering"});
  //         }
  //     }).catch(function(err) {
  //         console.log(err)
  //     });
  // }

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
