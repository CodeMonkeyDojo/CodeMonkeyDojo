//import React from "React"
import React from "react";

const TutorialText = () => (
  <div>

    <div class="w3-top">
      <div class="w3-bar" id="myNavbar">
        <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
          <i class="fa fa-bars"></i>
        </a>
        <a href="index.html" class="w3-bar-item w3-button">HOME</a>
        <a href="https://www.facebook.com/DataDisc/app/202980683107053/?ref=page_internal" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> FORUM</a>
        <a href="#home" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> TUTORIALS</a>
        <a href="submitTutorial.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> SUBMIT TUTORIAL</a>
        <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
          <i class="fa fa-search"></i>
        </a>
      </div>

      <!-- Navbar on small screens -->
      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium">
        <a href="https://www.facebook.com/DataDisc/app/202980683107053/?ref=page_internal" class="w3-bar-item w3-button" onclick="toggleFunction()">FORUM</a>
        <a href="#home" class="w3-bar-item w3-button" onclick="toggleFunction()">TUTORIALS</a>
        <a href="submitTutorial.html" class="w3-bar-item w3-button" onclick="toggleFunction()">SUBMIT TUTORIAL</a>
        <a href="#" class="w3-bar-item w3-button">SEARCH</a>
      </div>
    </div>


    <div class="bgimg-1 w3-display-container w3-opacity-min" id="home">
      <div class="w3-display-middle" style="white-space:nowrap;">


        <noscript>
          You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
        <h1> Tutorial Quetzal Volador</h1>
          <p class="w3-center"> Hola buen dia Code Monkeys hoy vamos a enseñarles a hacer el famoso juego de flappy CAT .El objetivo de flappy bird es llegar lo más lejos posible sin chocar con los obstáculos. Así que les enseñaremos a usar la lógica para poder crear este juego divertido en la plataforma creada por MIT (Massachusetts institute of Technology). </p>

    </div>

    <img src="images/typingMonkey.gif" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="33%" height="333">
    <img src="images/typingMonkey.gif" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="33%" height="333">
    <img src="images/typingMonkey.gif" class="w3-round w3-image w3-opacity w3-hover-opacity-off" alt="Photo of Me" width="33%" height="333">

    <!-- Footer -->
    <footer class="w3-center w3-black w3-padding-64 w3-opacity w3-hover-opacity-off">
      <a href="#home" class="w3-button w3-light-grey"><i class="fa fa-arrow-up w3-margin-right"></i>To the top</a>
      <div class="w3-xlarge w3-section">
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
      </div>
      <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" title="W3.CSS" target="_blank" class="w3-hover-text-green">w3.css</a></p>
    </footer>

</div>
);
export default TutorialText
