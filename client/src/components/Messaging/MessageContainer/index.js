// importing React for jsx
import React, {Component} from "react";
// importing styling from index.css
import "./index.css";
// importing Message component
import Message from "../Message";
// importing message form from component
import MessageForm from "../MessageForm";

// message list component that holds all messages
// in current conversation. (Passed in with props.)
class MessageList extends Component {
    constructor(props) {
        super(props)
    }

    scrollToBottom = (behavior) => {

        this.messagesEnd.scrollIntoView(behavior);
    }

    componentDidMount = () => {
        this.scrollToBottom({behavior: "auto"})
    }

    componentDidUpdate = () => {
        this.scrollToBottom({behavior: "smooth"});
    }

    render() {
        return (
            <div className="curr-conversation-container">
                <div className="message-list-container">
                    {(this.props.currConversation.messages) ? this.props.currConversation.messages.map(message => {
                        return <Message 
                            senderName={message.senderName}
                            text={message.text}
                            timeSent={message.timeSent}
                            key={message._id}
                            />
                        }) : <p align="center">You don't have any messages in this conversation yet!</p>
                    }
                    <div style={{ float:"left", clear: "both" }}
                        ref={(el) => { this.messagesEnd = el; }}>
                    </div>
                </div>
                <MessageForm 
                    user={this.props.user}
                    currConversation={this.props.currConversation}
                    socket={this.props.socket}
                /> 
            </div>
        );
    }
}

export default MessageList;