// importing React for jsx
import React from "react";
// importing styling from index.css
import "./index.css";
// importing Message component
import Message from "../Message";

// message list component that holds all messages
// in current conversation. (Passed in with props.)
function MessageList(props) {
    return (
        <div className="message-list-container">
            {props.messages.map(message => {
                    return <Message 
                        // photo={message.photo}
                        firstName={message.firstName}
                        lastName={message.lastName}
                        text={message.text}
                        timeSent={message.timeSent}
                    />
                })
            }
        </div>
    );
}

export default MessageList;