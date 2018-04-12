import React from 'react';
import ReactDOM from 'react-dom';
import GameLobby from './GameLobby.js';

it ('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<GameLobby />, div);
  ReactDOM.unmountComponentAtNode(div);
})
