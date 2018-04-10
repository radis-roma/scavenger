import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  navClickHandler() {
    console.log('button clicked!');
  }

  render() {
    return (
      <div className='nav-bar'>
        <div 
          className='home-button'
          onClick={this.navClickHandler}
        >
          scavenger
        </div>
        <div 
          className='nav-button'
          onClick={this.navClickHandler}
        >
          browse
        </div>
        <div 
          className='nav-button'
          onClick={this.navClickHandler}
        >
          events
        </div>
        <div 
          className='nav-button'
          onClick={this.navClickHandler}
        >
          host
        </div>
      </div>
    )
  }
}

export default NavBar;
