import React from 'react';
import ReactDOM from 'react-dom';
import GameTile from './GameTile.js';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const testGameObj = {
    name: 'Super Smash Bros. Melee',
    lobbyList: [
      {
        hostName: 'braunstein',
        region: 'North America',
        playerCount: 1,
        playerCap: 2,
        description: '1v1 me. Fox dittos. No items. Final Destination.'
      }
    ],
  }

  ReactDOM.render(<GameTile gameData={testGameObj}/>, div);
  ReactDOM.unmountComponentAtNode(div);
})
