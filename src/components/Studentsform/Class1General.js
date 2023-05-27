import React from 'react'
import Table from 'react-bootstrap/Table';
import { BsCalendar2DateFill } from "react-icons/bs";
import './Class1General.css';

function Class1General() {

  return (
    <div style={{marginLeft:"300px", marginTop:"150px" ,width:"1000px", fontWeight:"bold"}}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>FEES TYPE</th>
          <th>DUE DATE</th>
          <th>AMOUNT ($)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Admission Fees </td>
          <td><BsCalendar2DateFill/>04/15/2023</td>
          <td>2,000.00</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Larry the Bird</td>
          <td>@twitter</td>
          <td>@fat</td>
        </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default Class1General
