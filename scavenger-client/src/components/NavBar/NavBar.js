import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <h1 className='home-button'>scavenger</h1>
        <div>browse</div>
        <div>events</div>
        <div>host</div>
      </div>
    )
  }
}

export default NavBar;
