import React, { Component } from 'react';
import Notify from './header_components/Notify';
import Brand from './header_components/Brand';
import Profile from './header_components/Profile';

class Header extends Component {

  render() {
    return (
        <header className="header fixed-top clearfix">
          <Brand />
          <Notify />
          <Profile />
        </header>
    );
  }
}

export default Header;
