import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardFilm from './cardFilm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CardFilm/>
      </div>
    );
  }
}

export default App;
