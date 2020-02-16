import React, { Component } from "react";
// importing messaging components
// holds all messages in main body of char
import MessageContainer from "../components/Messaging/MessageContainer";
// form for creating and sending messages
import MessageForm from "../components/Messaging/MessageForm";
// container for all conversations
import ConversationList from "../components/Messaging/ConversationList";
// heading letting user know which conversation they're on
import ConversationHeader from "../components/Messaging/ConversationHeader";
// importing conversation form to create conversations
import ConversationForm from "../components/Messaging/ConversationForm";
// importing messaging api for resource server interactions
import API from "../utils/API"
// importing ObjectId from mongoose
import {ObjectId} from "mongoose"

// master component for managing state for all functoinal, child components
class Messaging extends Component {
    constructor() {
        super();

        this.state = {
            // holds all information about current conversation the user has selected
            // to focues on
            currConversation: {},
            // list of all conversations a user is involved in
            conversations: [], 
            // information for current user, including: first and last name
            user: {}
        }
    }
    // on load, grabs all conversations and messages from default conversation
    // that the current user is involved in
    componentDidMount = () => {
        this.getConversations(result => {
            // setting initial state with all conversations, all messages, 
            // and the respective user information
            this.setState({
                conversations: result.data.conversations, 
                currConversation: {
                    messages: result.data.messages, 
                    id: result.data.conversations[0]._id
                },
                user: result.data.user
            }, () => console.log(this.state))
        })
    }
    // get all conversations and default display messages
    getConversations = (cb) => {
        API.getAllConversations()
        .then(cb);
    }

    setMessages = (newMessage) => {
        console.log(newMessage);
        this.setState(prevState => {
            let messages = prevState.currConversation.messages.concat(newMessage);

            return {
                currConversation: {
                    messages: messages
                }
            }
        }, () => console.log(this.state))
    }

    setConversations = (newConversation) => {
        this.setState(prevState => {
            let conversations = [newConversation, ...prevState.conversations];

            return {
                conversations: conversations 
            }
        })
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <div style={{height: "100vh", width: "20vw"}}>
                    <ConversationForm 
                        userId={this.state.user.id}
                        setConversations={this.setConversations}
                    />
                    <ConversationList 
                        conversations={this.state.conversations}
                        currConversation={this.state.currConversation}
                    />
                </div>
                <div style={{height: "100vh", width: "80vw", backgroundColor: "rgba(33, 33, 33, 0.6)"}}>
                    <ConversationHeader conversationName="Conversation"/>
                    <MessageContainer 
                        messages={this.state.currConversation.messages}
                        conversationId={this.state.currConversation.id}
                        user={this.state.user}
                        setMessages={this.setMessages}
                    />
                </div>
            </div>
        )
    }
}

export default Messaging;