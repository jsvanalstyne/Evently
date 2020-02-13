import React from "react";
import "./style.css"


function AccountInfoCard(props) {
    return (
        <div className="card accountInfoCard text-center border">
            <div className="card-header">
                Your Account Information:
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.firstName}  {props.lastName}</h5>
                <p className="card-text">{props.street}</p>
                <p className="card-text">{props.city}, {props.stateCode}</p>
                <p className="card-text">{props.zipcode}</p>
            </div>
        </div>
    )
}
export default AccountInfoCard;