import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar.js';
import TileContainer from '../TileContainer/TileContainer.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <NavBar />
        <TileContainer />
      </div>
    );
  }
}

export default App;
