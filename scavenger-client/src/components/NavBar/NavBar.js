import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <div className='home-button'>scavenger</div>
        <div className='nav-button'>browse</div>
        <div className='nav-button'>events</div>
        <div className='nav-button'>host</div>
      </div>
    )
  }
}

export default NavBar;
