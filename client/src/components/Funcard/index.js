import React from "react";
import RegisterModal from "../RegisterModal"
import "./style.css"

function FunCard(props) {

return (
    <div>
      <div className="card title shadow-sm p-3 mb-5 bg-white rounded">
  <div className="card-body">
    <h5 className="card-title">{props.event}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{props.location}</h6>
    {/* <h5>{props.eventId}</h5> */}
    <p className="card-text">{props.description}</p>
    <h4><strong>Price: ${props.price}</strong></h4>
    <RegisterModal 
      // key={props.key}
      eventId= {props.eventId}
      title={"Register for " + props.event}
      body={"Cost: $" + props.price}
      statement={"Please enter your card information with Square Pay to register."}
      closeBtnText={"Register"}
      price={props.price}
      eventId={props.eventId}
      type={props.type}
    />
  </div>
</div>
</div>






  );
}
export default FunCard;