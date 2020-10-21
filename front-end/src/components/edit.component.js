import React, { Component } from "react";
import axios from "axios";
import decode from "jwt-decode";

export default class Edit extends Component {
  constructor() {
    super();
    // this.onChangeName = this.onChangeName.bind(this);
    // this.onChangeCompany  = this.onChangeCompany.bind(this);
    // this.onChangeAge = this.onChangeAge.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      email: "",
      password: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/getone/" + this.props.match.params.id)
      .then((response) => {
        this.setState({
          username: response.data.username,
          email: response.data.email,
          password: response.data.password,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //   onChangeName(e) {
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   }
  //   onChangeCompany(e) {
  //     this.setState({
  //       company: e.target.value,
  //     });
  //   }
  //   onChangeAge(e) {
  //     this.setState({
  //       age: e.target.value,
  //     });
  //   }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const obj = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .put(
        "http://localhost:3001/api/update/" + this.props.match.params.id,
        obj
      )
      .then((res) => console.log(res.data));
    this.setState({
      username: "",
      email: "",
      password: "",
    });

    this.props.history.push("/login");
  };

  render() {
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
            />
          </div>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.email}
              onChange={this.onChange}
              id="email"
            />
          </div>
          {/* <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              //   value={decode(this.state.password)}
              onChange={this.onChange}
              id="password"
            />
          </div> */}
          <div className="form-group">
            <input
              type="submit"
              value="Update Person Info"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
