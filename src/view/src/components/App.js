import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import CardMovie from './Movie/cardMovie';
import Animatecss from 'animate.css';
import FormAddMovie from './Movie/formAddMovie';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header animated slideInRight">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <FormAddMovie/>
        <CardMovie/>
      </div>
    );
  }
}

export default App;
