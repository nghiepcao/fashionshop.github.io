import React, { Component } from 'react';

class Brand extends Component {

  render() {
    return (
        <div className="brand">
            <a className="logo">
                VISITORS
            </a>
            <div className="sidebar-toggle-box">
                <div className="fa fa-bars"></div>
            </div>
        </div>  
    );
  }
}

export default Brand;
