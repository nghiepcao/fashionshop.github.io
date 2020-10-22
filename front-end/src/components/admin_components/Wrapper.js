import React, { Component } from 'react';

class Wrapper extends Component {

  render() {
    return (
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
            {/* <div className="row">
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
            </div> */}
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
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="clearfix"> </div>
                </div>
        </section>
    );
  }
}

export default Wrapper;
