// importing React for jsx
import React, {useState} from "react";
// importing styling from index.css
import "./index.css";
// importing Message component
import Message from "../Message";
// importing message form from component
import MessageForm from "../MessageForm";

// message list component that holds all messages
// in current conversation. (Passed in with props.)
function MessageList(props) {
    console.log(props.conversationId);
    return (
        <div className="curr-conversation-container">
            <div className="message-list-container">
                {(props.messages) ? props.messages.map(message => {
                    return <Message 
                        // photo={message.photo}
                        senderName={message.senderName}
                        text={message.text}
                        timeSent={message.timeSent}
                        />
                    }) : <p align="center">You don't have any messages in this conversation yet!</p>
                }
            </div>
            <MessageForm 
                user={props.user}
                messages={props.messages}
                conversationId={props.conversationId}
                setMessages={props.setMessages}
            /> 
        </div>
    );
}

export default MessageList;