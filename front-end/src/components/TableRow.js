import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const TableRow = ({ obj } = this.props) => {
  return (
    <tr>
      <td>{obj.username}</td>
      <td>{obj.email}</td>
      <td>{obj.idverify ? "Active" : " None Active"}</td>
      <td>
        <Link to={"/user/edit/" + obj.id} className="btn btn-primary">
          Edit
        </Link>
      </td>
      <td>
        <Link to={"/user/delete/" + obj.id} className="btn btn-danger">
          Delete
        </Link>
        {/* <button onClick={this.delete} className="btn btn-danger">
            Delete
          </button> */}
      </td>
    </tr>
  );
};

export default TableRow;
// class TableRow extends Component {
//   render() {
//     const dd = this.props.obj.idverify;
//     return (
//       <tr>
//         <td>{this.props.obj.username}</td>
//         <td>{this.props.obj.email}</td>
//         <td>{idverify ? "Active" : " None Active"}</td>
//         <td>
//           <Link
//             to={"/user/edit/" + this.props.obj.id}
//             className="btn btn-primary"
//           >
//             Edit
//           </Link>
//         </td>
//         <td>
//           <Link
//             to={"/user/delete/" + this.props.obj.id}
//             className="btn btn-danger"
//           >
//             Delete
//           </Link>
//           {/* <button onClick={this.delete} className="btn btn-danger">
//             Delete
//           </button> */}
//         </td>
//       </tr>
//     );
//   }
// }

// export default TableRow;
