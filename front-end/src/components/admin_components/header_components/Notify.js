import React, { Component } from 'react';

class Notify extends Component {

  render() {
    return (
        <div className="nav notify-row" id="top_menu">
            <ul className="nav top-menu">
                <li className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="fa fa-tasks"></i>
                        <span className="badge bg-success">8</span>
                    </a>
                    <ul className="dropdown-menu extended tasks-bar">
                        <li>
                            <p className="">You have 8 pending tasks</p>
                        </li>
                        <li>
                            <a href="#">
                                <div className="task-info clearfix">
                                    <div className="desc pull-left">
                                        <h5>Target Sell</h5>
                                        <p>25% , Deadline  12 June’13</p>
                                    </div>
                                            <span className="notification-pie-chart pull-right" data-percent="45">
                                    <span className="percent"></span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li className="external">
                            <a href="#">See All Tasks</a>
                        </li>
                    </ul>
                </li>
                <li id="header_inbox_bar" className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                        <i className="fa fa-envelope-o"></i>
                        <span className="badge bg-important">4</span>
                    </a>
                    <ul className="dropdown-menu extended inbox">
                        <li>
                            <p className="red">You have 4 Mails</p>
                        </li>
                        <li>
                            <a href="#">
                                <span className="photo"><img alt="avatar" src="public/admin/images/3.png" /></span>
                                        <span className="subject">
                                        <span className="from">Jonathan Smith</span>
                                        <span className="time">Just now</span>
                                        </span>
                                        <span className="message">
                                            Hello, this is an example msg.
                                        </span>
                            </a>
                        </li>
                    </ul>
                </li>
                <li id="header_notification_bar" className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle">
                        <i className="fa fa-bell-o"></i>
                        <span className="badge bg-warning">3</span>
                    </a>
                    <ul className="dropdown-menu extended notification">
                        <li>
                            <p>Notifications</p>
                        </li>
                        <li>
                            <div className="alert alert-info clearfix">
                                <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                <div className="noti-info">
                                    <a> Server overloaded.</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
  }
}

export default Notify;
