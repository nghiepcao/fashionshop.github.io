import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import jwt_decode from 'jwt-decode';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import { logoutUser, setCurrentUser } from './Actions/authActions';
import Dashboard from './components/dashboard/dashboard';
import Delete from './components/delete.component';
import Edit from './components/edit.component';
import Forgot from './components/forgotpassword';
import Login from './components/login.component';
import PrivateRoute from './components/private';
import Register from './components/register.component';
import UserList from './components/userList';
import Verify from './components/verify';
import store from './store';
import setAuthToken from './utils/setAuthToken';

// import api from "./utils/API";
require("dotenv").config();

// import { render } from "../../BackEnd/app";
// const api = axios.create({
//   baseURL: `http://localhost:3001/`,
// });
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends React.Component {
  // state = {
  //   courses: [],
  // };
  // constructor() {
  //   super();
  //   api.get("/").then((res) => {
  //     console.log(res.data);
  //     this.setState({ courses: res.data });
  //   });
  // }
  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     {/* {this.state.courses.map((courses) => (
      //       <h2>{courses.title}</h2>
      //     ))} */}
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>{this.state.courses}</p>
      //   </header>
      // </div>
      // <Provider store={store}>
      //   <Router>
      //     <div className="container">
      //       <nav className="navbar navbar-expand-lg navbar-light bg-light">
      //         <Link to={"/"} className="navbar-brand">
      //           Home
      //         </Link>
      //         <div
      //           className="collapse navbar-collapse"
      //           id="navbarSupportedContent"
      //         >
      //           <ul className="navbar-nav mr-auto">
      //             <li className="nav-item">
      //               <Link to={"/login"} className="nav-link">
      //                 Login
      //               </Link>
      //             </li>
      //             <li className="nav-item">
      //               <Link to={"/register"} className="nav-link">
      //                 Register
      //               </Link>
      //             </li>
      //             <li className="nav-item">
      //               <Link to={"/userlist"} className="nav-link">
      //                 User List
      //               </Link>
      //             </li>
      //             <li className="nav-item">
      //               <Link to={"/verify"} className="nav-link">
      //                 Verify account
      //               </Link>
      //             </li>
      //           </ul>
      //         </div>
      //       </nav>{" "}
      //       <br />
      //       {/* <h2>Welcome to Main page</h2> <br /> */}
      //       {/* 
      //       //token in locastrorage

      //       //store

      //       //call api again => send current user in redux => verify => update redux */}
      //       <Switch>
      //         <Route exact path="/login" component={Login} />
      //         <Route path="/register" component={Register} />
      //         <PrivateRoute path="/userlist" component={UserList} />
      //         <Route path="/user/edit/:id" component={Edit} />
      //         <Route path="/user/delete/:id" component={Delete} />
      //         <PrivateRoute path="/dashboard" component={Dashboard} />
      //         <Route path="/verify" component={Verify} />
      //         <Route path="/forgotpassword" component={Forgot} />
      //       </Switch>
      //     </div>
      //   </Router>
      // </Provider>
      <section id="container">
        <header className="header fixed-top clearfix">
          <div className="brand">
            <a href="index.html" className="logo">
                VISITORS
            </a>
            <div className="sidebar-toggle-box">
                <div className="fa fa-bars"></div>
            </div>
          </div>
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
                        <li>
                            <a href="#">
                                <div className="task-info clearfix">
                                    <div className="desc pull-left">
                                        <h5>Product Delivery</h5>
                                        <p>45% , Deadline  12 June’13</p>
                                    </div>
                                            <span className="notification-pie-chart pull-right" data-percent="78">
                                    <span className="percent"></span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="task-info clearfix">
                                    <div className="desc pull-left">
                                        <h5>Payment collection</h5>
                                        <p>87% , Deadline  12 June’13</p>
                                    </div>
                                            <span className="notification-pie-chart pull-right" data-percent="60">
                                    <span className="percent"></span>
                                    </span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <div className="task-info clearfix">
                                    <div className="desc pull-left">
                                        <h5>Target Sell</h5>
                                        <p>33% , Deadline  12 June’13</p>
                                    </div>
                                            <span className="notification-pie-chart pull-right" data-percent="90">
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
                        <li>
                            <a href="#">
                                <span className="photo"><img alt="avatar" src="public/admin/images/1.png"/></span>
                                        <span className="subject">
                                        <span className="from">Jane Doe</span>
                                        <span className="time">2 min ago</span>
                                        </span>
                                        <span className="message">
                                            Nice admin template
                                        </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="photo"><img alt="avatar" src="public/admin/images/3.png"/></span>
                                        <span className="subject">
                                        <span className="from">Tasi sam</span>
                                        <span className="time">2 days ago</span>
                                        </span>
                                        <span className="message">
                                            This is an example msg.
                                        </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="photo"><img alt="avatar" src="public/admin/images/2.png"/></span>
                                        <span className="subject">
                                        <span className="from">Mr. Perfect</span>
                                        <span className="time">2 hour ago</span>
                                        </span>
                                        <span className="message">
                                            Hi there, its a test
                                        </span>
                            </a>
                        </li>
                        <li>
                            <a href="#">See all messages</a>
                        </li>
                    </ul>
                </li>
                <li id="header_notification_bar" className="dropdown">
                    <a data-toggle="dropdown" className="dropdown-toggle" href="#">

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
                                    <a href="#"> Server #1 overloaded.</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="alert alert-danger clearfix">
                                <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                <div className="noti-info">
                                    <a href="#"> Server #2 overloaded.</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="alert alert-success clearfix">
                                <span className="alert-icon"><i className="fa fa-bolt"></i></span>
                                <div className="noti-info">
                                    <a href="#"> Server #3 overloaded.</a>
                                </div>
                            </div>
                        </li>

                    </ul>
                </li>
            </ul>
        </div>
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
        </header>
        <aside>
            <div id="sidebar" className="nav-collapse">
              <div className="leftside-navigation">
                  <ul className="sidebar-menu" id="nav-accordion">
                      <li>
                          <a className="active" href="index.html">
                              <i className="fa fa-dashboard"></i>
                              <span>Dashboard</span>
                          </a>
                      </li>
                      
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className="fa fa-book"></i>
                              <span>UI Elements</span>
                          </a>
                          <ul className="sub">
                  <li><a href="typography.html">Typography</a></li>
                  <li><a href="glyphicon.html">glyphicon</a></li>
                              <li><a href="grids.html">Grids</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="fontawesome.html">
                              <i className="fa fa-bullhorn"></i>
                              <span>Font awesome </span>
                          </a>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className="fa fa-th"></i>
                              <span>Data Tables</span>
                          </a>
                          <ul className="sub">
                              <li><a href="basic_table.html">Basic Table</a></li>
                              <li><a href="responsive_table.html">Responsive Table</a></li>
                          </ul>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className="fa fa-tasks"></i>
                              <span>Form Components</span>
                          </a>
                          <ul className="sub">
                              <li><a href="form_component.html">Form Elements</a></li>
                              <li><a href="form_validation.html">Form Validation</a></li>
                  <li><a href="dropzone.html">Dropzone</a></li>
                          </ul>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className="fa fa-envelope"></i>
                              <span>Mail </span>
                          </a>
                          <ul className="sub">
                              <li><a href="mail.html">Inbox</a></li>
                              <li><a href="mail_compose.html">Compose Mail</a></li>
                          </ul>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className=" fa fa-bar-chart-o"></i>
                              <span>Charts</span>
                          </a>
                          <ul className="sub">
                              <li><a href="chartjs.html">Chart js</a></li>
                              <li><a href="flot_chart.html">Flot Charts</a></li>
                          </ul>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className=" fa fa-bar-chart-o"></i>
                              <span>Maps</span>
                          </a>
                          <ul className="sub">
                              <li><a href="google_map.html">Google Map</a></li>
                              <li><a href="vector_map.html">Vector Map</a></li>
                          </ul>
                      </li>
                      <li className="sub-menu">
                          <a href="javascript:;">
                              <i className="fa fa-glass"></i>
                              <span>Extra</span>
                          </a>
                          <ul className="sub">
                              <li><a href="gallery.html">Gallery</a></li>
                      <li><a href="404.html">404 Error</a></li>
                              <li><a href="registration.html">Registration</a></li>
                          </ul>
                      </li>
                      <li>
                          <a href="login.html">
                              <i className="fa fa-user"></i>
                              <span>Login Page</span>
                          </a>
                      </li>
                  </ul>
              </div>
            </div>
        </aside>
        <section id="main-content">
          <section className="wrapper">
            <div className="market-updates">
              <div className="col-md-3 market-update-gd">
                <div className="market-update-block clr-block-2">
                  <div className="col-md-4 market-update-right">
                    <i className="fa fa-eye"> </i>
                  </div>
                  <div className="col-md-8 market-update-left">
                  <h4>Visitors</h4>
                  <h3>13,500</h3>
                  <p>Other hand, we denounce</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-3 market-update-gd">
                <div className="market-update-block clr-block-1">
                  <div className="col-md-4 market-update-right">
                    <i className="fa fa-users" ></i>
                  </div>
                  <div className="col-md-8 market-update-left">
                  <h4>Users</h4>
                    <h3>1,250</h3>
                    <p>Other hand, we denounce</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-3 market-update-gd">
                <div className="market-update-block clr-block-3">
                  <div className="col-md-4 market-update-right">
                    <i className="fa fa-usd"></i>
                  </div>
                  <div className="col-md-8 market-update-left">
                    <h4>Sales</h4>
                    <h3>1,500</h3>
                    <p>Other hand, we denounce</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="col-md-3 market-update-gd">
                <div className="market-update-block clr-block-4">
                  <div className="col-md-4 market-update-right">
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                  </div>
                  <div className="col-md-8 market-update-left">
                    <h4>Orders</h4>
                    <h3>1,500</h3>
                    <p>Other hand, we denounce</p>
                  </div>
                  <div className="clearfix"> </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>	
            <div className="row">
              <div className="panel-body">
                <div className="col-md-12 w3ls-graph">
                    <div className="agileinfo-grap">
                      <div className="agileits-box">
                        <header className="agileits-box-header clearfix">
                          <h3>Visitor Statistics</h3>
                            <div className="toolbar">
                              
                              
                            </div>
                        </header>
                        <div className="agileits-box-body clearfix">
                          <div id="hero-area"></div>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
            <div className="agil-info-calendar">
            <div className="col-md-6 agile-calendar">
              <div className="calendar-widget">
                        <div className="panel-heading ui-sortable-handle">
                  <span className="panel-icon">
                              <i className="fa fa-calendar-o"></i>
                            </span>
                            <span className="panel-title"> Calendar Widget</span>
                        </div>
                  <div className="agile-calendar-grid">
                    <div className="page">
                      
                      <div className="w3l-calendar-left">
                        <div className="calendar-heading">
                          
                        </div>
                        <div className="monthly" id="mycalendar"></div>
                      </div>
                      
                      <div className="clearfix"> </div>
                    </div>
                  </div>
              </div>
            </div>
            <div className="col-md-6 w3agile-notifications">
              <div className="notifications">
                  <header className="panel-heading">
                    Notification 
                  </header>
                  <div className="notify-w3ls">
                    <div className="alert alert-info clearfix">
                      <span className="alert-icon"><i className="fa fa-envelope-o"></i></span>
                      <div className="notification-info">
                        <ul className="clearfix notification-meta">
                          <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> send you a mail </li>
                          <li className="pull-right notification-time">1 min ago</li>
                        </ul>
                        <p>
                          Urgent meeting for next proposal
                        </p>
                      </div>
                    </div>
                    <div className="alert alert-danger">
                      <span className="alert-icon"><i className="fa fa-facebook"></i></span>
                      <div className="notification-info">
                        <ul className="clearfix notification-meta">
                          <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> mentioned you in a post </li>
                          <li className="pull-right notification-time">7 Hours Ago</li>
                        </ul>
                        <p>
                          Very cool photo jack
                        </p>
                      </div>
                    </div>
                    <div className="alert alert-success ">
                      <span className="alert-icon"><i className="fa fa-comments-o"></i></span>
                      <div className="notification-info">
                        <ul className="clearfix notification-meta">
                          <li className="pull-left notification-sender">You have 5 message unread</li>
                          <li className="pull-right notification-time">1 min ago</li>
                        </ul>
                        <p>
                          <a href="#">Anjelina Mewlo, Jack Flip</a> and <a href="#">3 others</a>
                        </p>
                      </div>
                    </div>
                    <div className="alert alert-warning ">
                      <span className="alert-icon"><i className="fa fa-bell-o"></i></span>
                      <div className="notification-info">
                        <ul className="clearfix notification-meta">
                          <li className="pull-left notification-sender">Domain Renew Deadline 7 days ahead</li>
                          <li className="pull-right notification-time">5 Days Ago</li>
                        </ul>
                        <p>
                          Next 5 July Thursday is the last day
                        </p>
                      </div>
                    </div>
                    <div className="alert alert-info clearfix">
                      <span className="alert-icon"><i className="fa fa-envelope-o"></i></span>
                      <div className="notification-info">
                        <ul className="clearfix notification-meta">
                          <li className="pull-left notification-sender"><span><a href="#">Jonathan Smith</a></span> send you a mail </li>
                          <li className="pull-right notification-time">1 min ago</li>
                        </ul>
                        <p>
                          Urgent meeting for next proposal
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
              <div className="agile-last-grids">
                <div className="col-md-4 agile-last-left">
                  <div className="agile-last-grid">
                    <div className="area-grids-heading">
                      <h3>Monthly</h3>
                    </div>
                    <div id="graph7"></div>
                  </div>
                </div>
                <div className="col-md-4 agile-last-left agile-last-middle">
                  <div className="agile-last-grid">
                    <div className="area-grids-heading">
                      <h3>Daily</h3>
                    </div>
                    <div id="graph8"></div>
                  </div>
                </div>
                <div className="col-md-4 agile-last-left agile-last-right">
                  <div className="agile-last-grid">
                    <div className="area-grids-heading">
                      <h3>Yearly</h3>
                    </div>
                    <div id="graph9"></div>
                  </div>
                </div>
                <div className="clearfix"> </div>
              </div>
            <div className="agileits-w3layouts-stats">
                  <div className="col-md-4 stats-info widget">
                    <div className="stats-info-agileits">
                      <div className="stats-title">
                        <h4 className="title">Browser Stats</h4>
                      </div>
                      <div className="stats-body">
                        <ul className="list-unstyled">
                          <li>GoogleChrome <span className="pull-right">85%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar green" style={{width:"85%"}}></div> 
                            </div>
                          </li>
                          <li>Firefox <span className="pull-right">35%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar yellow" style={{width:"35%"}}></div>
                            </div>
                          </li>
                          <li>Internet Explorer <span className="pull-right">78%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar red" style={{width:"78%"}}></div>
                            </div>
                          </li>
                          <li>Safari <span className="pull-right">50%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar blue" style={{width:"50%"}}></div>
                            </div>
                          </li>
                          <li>Opera <span className="pull-right">80%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar light-blue" style={{width:"80%"}}></div>
                            </div>
                          </li>
                          <li className="last">Others <span className="pull-right">60%</span>  
                            <div className="progress progress-striped active progress-right">
                              <div className="bar orange" style={ {width:"60%"} }></div>
                            </div>
                          </li> 
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 stats-info stats-last widget-shadow">
                    <div className="stats-last-agile">
                      <table className="table stats-table ">
                        <thead>
                          <tr>
                            <th>S.NO</th>
                            <th>PRODUCT</th>
                            <th>STATUS</th>
                            <th>PROGRESS</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Lorem ipsum</td>
                            <td><span className="label label-success">In progress</span></td>
                            <td><h5>85% <i className="fa fa-level-up"></i></h5></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Aliquam</td>
                            <td><span className="label label-warning">New</span></td>
                            <td><h5>35% <i className="fa fa-level-up"></i></h5></td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Lorem ipsum</td>
                            <td><span className="label label-danger">Overdue</span></td>
                            <td><h5 className="down">40% <i className="fa fa-level-down"></i></h5></td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>Aliquam</td>
                            <td><span className="label label-info">Out of stock</span></td>
                            <td><h5>100% <i className="fa fa-level-up"></i></h5></td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Lorem ipsum</td>
                            <td><span className="label label-success">In progress</span></td>
                            <td><h5 className="down">10% <i className="fa fa-level-down"></i></h5></td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Aliquam</td>
                            <td><span className="label label-warning">New</span></td>
                            <td><h5>38% <i className="fa fa-level-up"></i></h5></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
        </section>
          <div className="footer">
          <div className="wthree-copyright">
            <p>© 2017 Visitors. All rights reserved | Design by <a href="http://w3layouts.com">W3layouts</a></p>
          </div>
          </div>
        </section>
      </section>
    );
  }
}

export default App;
