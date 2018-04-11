import React, { Component } from 'react';
import './GameTile.css';

class GameTile extends Component {
  render() {
    const {
      name,
      lobbyList,
    } = this.props.gameData;

    return (
      <div className='game-tile'>
        <div
          className='title'
        >
          {name}
        </div>
        <div
          className='open-lobby-count'
        >
          {lobbyList.length} lobbies
        </div>
      </div>
    )
  }
}

export default GameTile;
