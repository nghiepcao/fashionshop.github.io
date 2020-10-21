import React, { Component } from "react";
import axios from "axios";
import { registerUser } from "../Actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import classnames from "classnames";

class Register extends Component {
  constructor() {
    super();
    // this.onChangeUserName = this.onChangeUserName.bind(this);
    // this.onChangeEmail = this.onChangeEmail.bind(this);
    // this.onChangePassword = this.onChangePassword.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
      idverify: "",
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

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const obj = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      idverify: this.state.idverify,
    };
    // axios
    //   .post("http://localhost:3001/register", obj)
    //   .then((res) => console.log(res.data));

    // this.setState({
    //   username: "",
    //   email: "",
    //   password: "",
    // });
    this.props.registerUser(obj, this.props.history);
  };

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Add a new Account</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>UserName: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.username}
              onChange={this.onChange}
              error={errors.name}
              id="username"
              //   className={classnames("", {
              //     invalid: errors.name,
              //   })}
            />
            {/* <label htmlFor="name">Name</label> */}

            <span style={{ color: "red" }}>{errors.name}</span>
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
              error={errors.email}
              id="email"
              //   className={classnames("", {
              //     invalid: errors.email || errors.emailnotfound,
              //   })}
            />
            {/* <label htmlFor="email">Email</label> */}
            <span style={{ color: "red" }}>
              {errors.email}
              {errors.emailnotfound}
            </span>
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              id="password"
              //   className={classnames("", {
              //     invalid: errors.password || errors.passwordincorrect,
              //   })}
            />
            {/* <label htmlFor="password">Password</label> */}
            <span style={{ color: "red" }}>
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Register Account"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
