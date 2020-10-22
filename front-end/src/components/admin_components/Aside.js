import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store';

class Aside extends Component {

    
  render() {
    return (
        <Provider store={store}>
            <Router>
                <aside>
                    <div id="sidebar" className="nav-collapse">
                    <div className="leftside-navigation">
                        <ul className="sidebar-menu" id="nav-accordion">
                            <li className="sub-menu">
                                <a className="active">
                                    <i className="fa fa-dashboard"></i>
                                    <Link to={'/'}>
                                        <span>Dashboard</span>
                                    </Link> 
                                </a>
                            </li>
                            <li className="sub-menu">
                                <a href="javascript:;">
                                    <i className="fa fa-th"></i>
                                    <span>Product</span>
                                </a>
                                <ul className="sub">
                                    <Link to={'/Catalog'}>
                                        <li><i class="fa fa-product-hunt" aria-hidden="true"></i>Catalog</li>
                                    </Link>
                                    <Link to='/Items'>
                                        <li> <i class="fa fa-television" aria-hidden="true"></i>Items</li>
                                    </Link>
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
            </Router>
        </Provider>
    );
  }
}
//<Route path="/register" component={Register} />
export default Aside;
