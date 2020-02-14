import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import "./style.css";


function Dropdowns(props){
return(
<Dropdown className="dropDownBar mt-3">
  <Dropdown.Toggle variant="primary " id="dropdown-basic">
   {props.name}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">{props.description}</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
)
}
export default Dropdowns;