import React from "react";
import "./style.css";

function Accounts(props){
return(
    <div className="card  shadow-lg p-4 mb-5 bg-white rounded text-center accountCard">
    {/* <img src="..." class="card-img-top" alt="..."> */}
    <h2>Your Account Information</h2>
    <div className="card-body">
<p className="card-text">{props.name}</p>
<p className="card-text">{props.street} </p>
<p className="card-text">{props.city}, {props.userstate}</p>
<p className="card-text">{props.email}</p>
    </div>

    </div>
)

}

export default Accounts;