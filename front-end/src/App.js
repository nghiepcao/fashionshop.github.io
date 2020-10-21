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

import Header from './components/admin_components/Header';
import Aside from './components/admin_components/Aside';
import Wrapper from './components/admin_components/Wrapper';
import Footer from './components/admin_components/Footer';


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
class App extends Component {
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
        <Header />
        <Aside />
        <section id="main-content">
          <Wrapper />
          <Footer />
        </section>
      </section>
    );
  }
}

export default App;
