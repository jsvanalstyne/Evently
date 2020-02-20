import React from "react";
import "./style.css"
import Button from 'react-bootstrap/Button'
function AccountEventCard(props){
    return (
        <div className="card accountEventCard text-center border ml-3 mr-3">
            <div className="card-header">
                {props.header}
            </div>
            {props.children}
        </div>
    )
}
export default AccountEventCard