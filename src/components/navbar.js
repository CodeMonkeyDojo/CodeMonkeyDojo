import React from 'react';

const Navbar = () =>(

  <div class="w3-top">
    <div class="w3-bar" id="myNavbar">
      <a class="w3-bar-item w3-button w3-hover-black w3-hide-medium w3-hide-large w3-right" href="javascript:void(0);" onclick="toggleFunction()" title="Toggle Navigation Menu">
        <i class="fa fa-bars"></i>
      </a>
      <a href="#home" class="w3-bar-item w3-button">HOME</a>
      <a href="https://www.facebook.com/DataDisc/app/202980683107053/?ref=page_internal" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-user"></i> FORUM</a>
      <a href="tutorials.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-th"></i> TUTORIALS</a>
      <a href="submitTutorial.html" class="w3-bar-item w3-button w3-hide-small"><i class="fa fa-envelope"></i> SUBMIT TUTORIAL</a>
      <a href="#" class="w3-bar-item w3-button w3-hide-small w3-right w3-hover-red">
        <i class="fa fa-search"></i>
      </a>
    </div>
    </div>
)


export default Navbar;
