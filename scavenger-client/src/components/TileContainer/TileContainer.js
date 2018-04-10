import React, { Component } from 'react';
import GameTile from '../GameTile/GameTile.js';
import './TileContainer.css';

class TileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameLobbies: [],
    }
  }

  render() {
    return (
      <div>
        TileContainer
        <GameTile />
      </div>
    )
  }
}

export default TileContainer;
