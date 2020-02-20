import Table from "react-bootstrap/Table"
import React from "react";
import "./style.css"
import moment from "moment"


function BillsTable(props){
   return(
<Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>Event/Program Name</th>
      <th>Date Paid</th>
      <th>Amount</th>
    </tr>
  </thead>
   {/* {/* {this.state.bills.map(userBill => ( */}
                  
  <tbody>
  {props.bills.map(billtable => 
    <tr>
      <td>{(billtable.eventPaidFor.length > 0) ? billtable.eventPaidFor[0].name : billtable.programPaidFor[0].name}</td>
      <td>{moment(billtable.dateIssued).format("LLL")}</td>
      <td>{billtable.amount}</td>
    </tr>
     )}  
  </tbody>
</Table>
   )
}
export default BillsTable;