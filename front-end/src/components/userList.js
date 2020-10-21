import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

export default class UserList extends Component {
  constructor() {
    super();
    this.state = { persons: [] };
  }

  componentDidMount() {
    // if (this.props.isAuthenticated) {
    //   this.props.history.push("/");
    // } else {
    axios
      .get("http://localhost:3001/api/getall")
      .then((response) => {
        console.log(response.data);
        this.setState({ persons: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    // }
  }

  tabRow() {
    return this.state.persons.map((object, i) => {
      return <TableRow obj={object} key={i} />;
    });

    // return this.state.persons.map(function (object, i) {
    //   return <TableRow obj={object} key={i} />;
    // });
  }

  render() {
    return (
      <div>
        <h3 align="center">Persons List</h3>
        <table className="table table-striped" style={{ marginTop: 20 }}>
          <thead>
            <tr>
              <th>User Name</th>
              <th>Email</th>
              <th>IsVerify</th>
              <th colSpan="2">Action</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
