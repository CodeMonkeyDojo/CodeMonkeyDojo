import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// function Welcome(props) {
//
//   return <h1>ACERCA DE MI, {props.name}</h1>;
// };

ReactDOM.render(<App />, document.getElementById('CodeMonkeyDojo'));
registerServiceWorker();
