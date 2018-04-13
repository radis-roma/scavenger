import React, { Component } from 'react';
import NavButton from '../NavButton/NavButton.js';
import './NavBar.css';

class NavBar extends Component {
  render() {
    const buttons = ['browse', 'events', 'host'];

    return (
      <div className='nav-bar'>
        <div 
          className='home-button'
        >
          scavenger
        </div>
        {
          buttons.map((name, i) => {
            return (
              <NavButton 
                key={i}
                type={name}
              />
            )
          })
        }
      </div>
    )
  }
}

export default NavBar;
