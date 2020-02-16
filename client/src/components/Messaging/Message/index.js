// importing React for jsx
import React from "react";
// importing Message styling
import "./index.css";

// Message component that gets passed props containing: 
//   1. photo of the user that sent the message
//   2. text of the message sent
//   3. first and last name of the user that sent the message
function Message(props) {
    console.log(props.photo);
    console.log(props.text);
    console.log(props.firstName);
    console.log(props.lastName);
    console.log(props.timeSent);
    return (
        <div className="message-container">
            <div className="photo-container">
                <img className="photo-id" src={props.photo} alt={`${props.firstName} ${props.lastName} id photo`}/>
            </div>
            <div className="name-and-message-container">
                <div>
                    <h4 className="name-display">{`${props.firstName} ${props.lastName}`}</h4>
                    <p className="time-sent-display">{props.timeSent}</p>
                </div>
                <p className="text-display">{props.text}</p>
            </div>
        </div>

    );
}

export default Message;