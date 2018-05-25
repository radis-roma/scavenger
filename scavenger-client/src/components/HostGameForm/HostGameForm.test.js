import React from 'react';
import ReactDOM from 'react-dom';
import HostGameForm from './HostGameForm.js';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<HostGameForm />, div);
  ReactDOM.unmountComponentAtNode(div);
})
