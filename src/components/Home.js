import React, { Component } from 'react';
import {BrowserRouter, Route } from "react-router-dom";
import Footer from "./footer"
const Home = () => {
  return (
    <div class="chepesText" id="about">
      <h3 class="w3-center">ACERCA DE CODE MONKEY</h3>
      <p class="w3-center"><em>Me gusta programar</em></p>
      <p>Hemos creado un sitio web ficticio, ya que nuestro hobby es programar.
        Y nuestro principal objetivo es estimular y desarrolar el uso de la logica.
        enfocandonos especificamente en niños de temprana edad..</p>

        <div class="w3-col m6 w3-hide-small">

          <p>Este es el primer sitio dirigido  a niños de habla hispana, para integrarlos al mundo de la programacion.
            De la manera mas facil y divertida.
            Aprende codigos jugando, construyendo y desarmando tus juegos favoritos. </p>
        </div>
        <Footer />
      </div>
  );
}


export default Home;
