import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import Footer from "./footer"

const Contact = () => {
  return (
    <div>
// (type, user_name, email, password, === TYPE CAREFULL should be auto
    <form onSubmit={this.handleSubmit}>
      <label htmlFor="username">Unete al CodeMonkey TEAM </label>
      <br></br>
        <label htmlFor="username">Nombre</label>
        <input id="username" name="username" type="text" />
  <br></br>
        <label htmlFor="email">Correo Electronico</label>
        <input id="email" name="email" type="email" />
  <br></br>
        <label htmlFor="birthdate">contrasena</label>
        <input id="birthdate" name="birthdate" type="text" />
  <br></br>
        <button>Enviar</button>
      </form>

<Footer />
</div>

  );
}


export default Contact;
