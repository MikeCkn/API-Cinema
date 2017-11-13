import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import Animatecss from 'animate.css';

import {CardMovie, FormAddMovie} from './Movie';

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
