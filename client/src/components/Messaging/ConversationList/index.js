// importing React for jsx
import React from "react";
// importing css
import "./index.css";

// Conversation list component containing all conversations
// that users are a part of
function ConversationList(props) {
    return (
        <div className="conversation-list">
            <h4 className="conversation-header">Conversations</h4>
            {props.conversations.map(conversation => {
                return (<div className="conversation-container"><a key={conversation.conversationId} className="conversation-title" conversationid={conversation.id}>{conversation.name}</a></div>)
            })}
        </div>
    );
}

export default ConversationList;