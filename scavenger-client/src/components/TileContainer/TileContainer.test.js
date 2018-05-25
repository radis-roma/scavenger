import React from 'react';
import ReactDOM from 'react-dom';
import TileContainer from './TileContainer.js';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<TileContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
})
