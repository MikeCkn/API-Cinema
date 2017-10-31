import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardFilm from './cardFilm';
import Animatecss from 'animate.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header animated slideInRight">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CardFilm/>
      </div>
    );
  }
}

export default App;
