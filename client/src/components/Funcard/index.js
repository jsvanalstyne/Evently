import React from "react";
import RegisterModal from "../RegisterModal"
import "./style.css"

function FunCard(props) {

return (
    // <div className="card title shadow-lg p-3 mb-5 bg-white rounded">
    //     <h2 >{props.event}</h2>
    //     <h3>{props.description}</h3>
    //     <h3>{props.date}</h3>
    //     <h3>{props.location}</h3>
       
    //     <button>Register</button>
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
    />
  </div>
  {/* <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
  <div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div> */}
{/* </div> */}
        
   
      
</div>
</div>






  );
}
export default FunCard;