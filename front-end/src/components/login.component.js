import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import { loginUser } from '../Actions/authActions';

class Login extends Component {
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

  //   onChangeUserName(e) {
  //     this.setState({
  //       username: e.target.value,
  //     });
  //   }

  //   onChangeEmail(e) {
  //     this.setState({
  //       email: e.target.value,
  //     });
  //   }

  //   onChangePassword(e) {
  //     this.setState({
  //       password: e.target.value,
  //     });
  //   }
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    } else {
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
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
    this.props.loginUser(obj);
  };

  render() {
    const { errors } = this.state;

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Login page :</h3>
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
            />
            <span style={{ color: "red" }}>
              {errors.name}
              {errors.usernotfound}
              {errors.usernotverify}
            </span>
          </div>
          {/* <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
              id="email"
            />
          </div> */}
          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={this.state.password}
              onChange={this.onChange}
              error={errors.password}
              id="password"
            />
            <span style={{ color: "red" }}>
              {errors.password}
              {errors.passwordincorrect}
            </span>
          </div>
          <div className="form-group">
            <input type="submit" value="Login" className="btn btn-primary" />
            <Link
              to={"/forgotpassword"}
              className="btn btn-info"
              style={{ marginLeft: "20px" }}
            >
              Forgot password
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(withRouter(Login));
