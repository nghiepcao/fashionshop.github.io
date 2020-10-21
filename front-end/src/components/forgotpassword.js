import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { forgotPassword } from '../Actions/authActions';

class Forgot extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      email: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  //   componentDidMount() {
  //     axios
  //       .get("http://localhost:3001/api/getone/" + this.props.match.params.id)
  //       .then((response) => {
  //         this.setState({
  //           username: response.data.username,
  //           email: response.data.email,
  //         });
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       });
  //   }

  //   componentWillReceiveProps(nextProps){}
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      email: this.state.email,
    };
    // axios
    //   .put("http://localhost:3001/api/forgotpassword/" + obj)
    //   .then((res) => console.log(res.data));
    // this.setState({
    //   username: "",
    //   email: "",
    // });

    // this.props.history.push("/login");
    this.props.forgotPassword(obj);
  };

  render() {
    const { errors } = this.state;
    return (
      <div style={{ marginTop: 10 }}>
        <h3 align="center">Update Person Info</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>User Name: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChange}
              id="username"
              error={errors.name}
            />
            <span style={{ color: "red" }}>
              {errors.name}
              {errors.usernotfound}
            </span>
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
              id="email"
              error={errors.email}
            />
            <span style={{ color: "red" }}>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>

          <div className="form-group">
            <input
              type="submit"
              value="Update Person Info"
              className="btn btn-primary"
            />
          </div>
          <div>
            <h2>{localStorage.getItem("messsuccess")}</h2>
            <h3>Click here back to the login page</h3>
            <Link to={"/"}>Back</Link>
          </div>
        </form>
      </div>
    );
  }
}
Forgot.propTypes = {
  forgotPassword: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { forgotPassword })(withRouter(Forgot));
