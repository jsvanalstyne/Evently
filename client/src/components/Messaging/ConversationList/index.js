// importing React for jsx
import React from "react";
// importing css
import "./index.css";

// Conversation list component containing all conversations
// that users are a part of
function ConversationList(props) {
    return (
        <div className="conversation-list">
            <h3 className="conversation-header">Conversations</h3>
            {props.conversations.map(conversation => {
                <p 
                    className="conversation-title"
                    conversationId={conversation.id}
                >{conversation.name}
                </p>
            })}
        </div>
    );
}

export default ConversationList;