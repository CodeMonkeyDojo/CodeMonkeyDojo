// this component will pull the tutorial text, and game code from our
// database for the current tutorial

import React from 'react';
// import React, { Component } from 'react';
import '../App.css';
import '../index.css';

// import React, {Component} from 'react';
// import Validation from 'react-validation';
// import "../validation.js";

export default class HowToText extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            description: '',
            additional_desc: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    getTutorial(){
      $.ajax({
        url:'/Tutorial',
        type:"GET",
        success: (data) => {
          this.setState({
            list: data
          });
        },
        error: (xhr, err) => {
          console.log('Can\'t get tutorial information', err);
        }


      })
    }

    // logChange(e) {
    //     this.setState({[e.target.name]: e.target.value});
    // }

}

// const HowToText = () => (
// // class HowToText extends Component {
//   // add padding to sides
//   <div class="block">
//     {/* add translucent black background to h3 text */}
//     <h3 class="App-title" style={{background: 'rgba(0, 0, 0, 0.7'}}>Tutorial Name Here</h3>
//
//     <p class="App-intro"><em>One-Sentence Summary Here</em></p>
//
//     <p>Blah blah de blah blah blob this is where the instructions go.
//     Chepe se encargara de escribir las instrucciones para complimentar el video.
//     Las instrucciones deben ser expresadas claramente, y detalladas sin ser muy largas.</p>
//
//     <div class="block w3-hide-small">
//       <p>Aqui puede ir todo lo que no quieras que aparesca en pantallas chiquitas,
//       como dispositivos moviles, puede incluir fotos, igual a el paragrafo de arriba.
//       Asegurate que detalles incluidos aqui no sean instrucciones vitales para el funcionamiento
//       de el programa siendo creado.</p>
//     </div>
//   </div>
//   // pull data from database when ready, and comment out text above, while maintaining
//   // the same structure, this can be done using multiple text database rows.
// // }
// )

export default HowToText;
