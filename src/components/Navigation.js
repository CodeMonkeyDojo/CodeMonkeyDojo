import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return (
    <div>

  <NavLink to="/">Home</NavLink>

  <NavLink to="/Forum"> Forum </NavLink>
  <NavLink to="/TutorialText"> Tutorials </NavLink>
  <NavLink to="/SubmitTutorial">      Submit Tutorial </NavLink>

    </div>
  );



};


export default Navigation;
