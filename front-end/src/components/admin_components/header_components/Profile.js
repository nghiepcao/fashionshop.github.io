import React, { Component } from 'react';

class Profile extends Component {

  render() {
    return (
        <div className="top-nav clearfix">
            <ul className="nav pull-right top-menu">
              <li>
                  <input type="text" className="form-control search" placeholder=" Search" />
              </li>
              <li className="dropdown">
                  <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                      <img alt="" src="images/2.png"/>
                      <span className="username">John Doe</span>
                      <b className="caret"></b>
                  </a>
                  <ul className="dropdown-menu extended logout">
                      <li><a href="#"><i className=" fa fa-suitcase"></i>Profile</a></li>
                      <li><a href="#"><i className="fa fa-cog"></i> Settings</a></li>
                      <li><a href="login.html"><i className="fa fa-key"></i> Log Out</a></li>
                  </ul>
              </li>
            </ul>
        </div>
    );
  }
}

export default Profile;
