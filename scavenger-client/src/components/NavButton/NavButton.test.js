import React from 'react';
import ReactDOM from 'react-dom';
import NavButton from './NavButton.js';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<NavButton />, div);
  ReactDOM.unmountComponentAtNode(div);
})
