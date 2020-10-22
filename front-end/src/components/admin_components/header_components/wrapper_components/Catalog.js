import React, { Component } from 'react';

class Catalog extends Component {

  render() {
    return (
        <div class="panel panel-default">
            <div class="panel-heading">
                Catalog
            </div>
            <div>
                <table class="table" ui-jq="footable" ui-options='{
                    "paging": {
                    "enabled": true
                    },
                    "filtering": {
                    "enabled": true
                    },
                    "sorting": {
                    "enabled": true
                    }}'>
                    <thead>
                    <tr>
                        <th data-breakpoints="xs">ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th data-breakpoints="xs">Job Title</th>
                    
                        <th data-breakpoints="xs sm md" data-title="DOB">Date of Birth</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr data-expanded="true">
                            <td>1</td>
                            <td>Dennise</td>
                            <td>Fuhrman</td>
                            <td>High School History Teacher</td>
                            
                            <td>July 25th 1960</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div> 
    );
  }
}

export default Catalog;
