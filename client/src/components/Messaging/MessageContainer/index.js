// importing React for jsx
import React from "react";
// importing styling from index.css
import "./index.css";
// importing Message component
import Message from "../Message";
// importing message form from component
import MessageForm from "../MessageForm";

// message list component that holds all messages
// in current conversation. (Passed in with props.)
function MessageList(props) {
    return (
        <div className="curr-conversation-container">
            <div className="message-list-container">
                {(props.currConversation.messages) ? props.currConversation.messages.map(message => {
                    return <Message 
                        senderName={message.senderName}
                        text={message.text}
                        timeSent={message.timeSent}
                        key={message._id}
                        />
                    }) : <p align="center">You don't have any messages in this conversation yet!</p>
                }
            </div>
            <MessageForm 
                user={props.user}
                currConversation={props.currConversation}
                socket={props.socket}
            /> 
        </div>
    );
}

export default MessageList;