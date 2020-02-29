// importing React for jsx
import React from "react";
// importing Message styling
import "./index.css";

// Message component that gets passed props containing: 
//   1. photo of the user that sent the message
//   2. text of the message sent
//   3. first and last name of the user that sent the message
function Message(props) {
    return (
        <div className="message-container">
            {/* <div className="photo-container">
                <img className="photo-id" src="https://google.com" ttt={`${props.senderName} id photo`}/>
            </div> */}
            <div className="name-and-message-container">
                <div className="name-display-container">
                    <h4 className="name-display">{`${props.senderName}`}</h4>
                    <p className="time-sent-display">{props.timeSent}</p>
                </div>
                <p className="text-display">{props.text}</p>
            </div>
        </div>

    );
}

export default Message;