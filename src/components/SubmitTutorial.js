import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom";

const Contact = () => {
  return (

    <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Tienes una sugerencia/tutorial para Codemonkeys? Diganos</label>
      <br></br>
        <label htmlFor="username">Nombre</label>
        <input id="username" name="username" type="text" />
  <br></br>
        <label htmlFor="email">Correo Electronico</label>
        <input id="email" name="email" type="email" />
  <br></br>
        <label htmlFor="birthdate">Comentarios</label>
        <input id="birthdate" name="birthdate" type="text" />
  <br></br>
        <button>Send data!</button>
      </form>



  );
}


export default Contact;
