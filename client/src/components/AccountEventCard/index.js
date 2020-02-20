import React from "react";
import "./style.css"
import Button from 'react-bootstrap/Button'
function AccountEventCard(props){
    return (
        <div className="card accountEventCard text-center border border-dark">
            <div className="card-header">
                {props.header}
            </div>
            {props.children}
        </div>
    )
}
export default AccountEventCard