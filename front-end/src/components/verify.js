import React, { Component } from "react";
import axios from "axios";
import { loginUser } from "../Actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { verifyEmail, reSend } from "../Actions/authActions";

class verify extends Component {
  constructor() {
    super();
    this.state = {
      code: "",
    };
  }
  //   componentWillReceiveProps(nextProps) {
  //     if (this.props.auth.isAuthenticated) {
  //       this.props.history.push("/login");
  //     }
  //   }

  onReSendClick = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("emailRegisterSuccess");
    const data = {
      email,
    };
    this.props.reSend(data);
  };

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const email = localStorage.getItem("emailRegisterSuccess");
    const data = {
      code: this.state.code,
      email,
    };
    this.props.verifyEmail(data, this.props.history);
  };

  render() {
    const { errors } = this.props;

    return (
      <div style={{ marginTop: 10 }}>
        <h3>Verify page</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label style={{ marginTop: "50px" }}>
              Input verify code for user {localStorage.getItem("username")}:{" "}
            </label>
            <input
              type="text"
              className="form-control"
              value={this.state.code}
              onChange={this.onChange}
              id="code"
            />
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
            <input
              style={{ width: "100px" }}
              type="submit"
              value="Verify"
              className="btn btn-primary"
            />
            <button
              style={{ marginLeft: "30px" }}
              type="button"
              class="btn btn-info"
              onClick={this.onReSendClick}
            >
              I have not received the code
            </button>
          </div>
        </form>
      </div>
    );
  }
}
verify.propTypes = {
  //   reSend: propTypes.func.isRequired,
  verifyEmail: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { verifyEmail, reSend })(verify);
