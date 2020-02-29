import React from "react";
import "./index.css";

function Recipient(props) {

    return (
        <div className="recipient-container">
            <p className="recipient-name-display">{props.name}</p>
            <button className="delete-recipient-button" onClick={event => props.deleteRecipient(event, props.id)}>x</button>
        </div>
    )
}

export default Recipient;