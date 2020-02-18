import React, {useState} from "react";
import Dropdown from 'react-bootstrap/Dropdown'
import RegisterModal from "../RegisterModal"
import "./style.css";


function PromoDropdowns(props){
  
return(
  
<Dropdown className="dropDownBar mt-3">
  <Dropdown.Toggle variant="primary " id="dropdown-basic">
   {props.name}
  </Dropdown.Toggle>

  <Dropdown.Menu> 
    <Dropdown.Item href="#/action-1"className="overflow-auto">

      <RegisterModal title={props.name} price={props.price} body={props.description} eventId={props.eventId} type="event"></RegisterModal></Dropdown.Item>
      <Dropdown.Item>When:{props.dateStart}</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
)
}
export default PromoDropdowns;