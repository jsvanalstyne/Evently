import React from "react";
import "./index.css";

function ConversationHeader(props) {
    return (
        <div className="header-container">
            <h4>{props.conversationName}</h4>
        </div>
    )
}

export default ConversationHeader;