import React, { Component } from 'react';
import './NavButton.css';

class NavButton extends Component {
  constructor(props) {
    super(props);
    this.navClickHandler = this.navClickHandler.bind(this);
  }

  navClickHandler(e) {
    return e.target.innerHTML
  }

  render() {
    const {
      type,
    } = this.props;

    return (
      <div
        className='nav-button'
        onClick={this.navClickHandler}
      >
        {type}
      </div>
    )
  }
}

export default NavButton;
