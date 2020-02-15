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

// master component for managing state for all functoinal, child components
class Messaging extends Component {
    constructor() {
        super();

        this.state = {
            // holds all information about current conversation the user has selected
            // to focues on
            currConversation: {
                messages: [
                    {
                        text:"adsffad",
                        firstName:"ads", 
                        lastName:"daff", 
                        timeSent:"6:11 PM"
                    }, 
                    {
                        text:"asdfdfa",
                        firstName:"ads", 
                        lastName:"daff", 
                        timeSent:"6:11 PM"
                    }, 
                    {
                        text:"asfdadfadsf",
                        firstName:"ads", 
                        lastName:"daff", 
                        timeSent:"6:11 PM"
                    }
                ], 
            },
            // list of all conversations a user is involved in
            conversations: [
                {name: "adfads"},{name: "dFAFasdf"},{name: "adsfaf"},{name: "adfadfad"}
            ], 
            // information for current user, including: first and last name
            user: {

            }
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
                messages: result.data.messages, 
                user: result.data.user
            })
        })
    }
    // get all conversations and default display messages
    getConversations = (cb) => {
        API.getAllConversations()
        .then(cb);
    }

    // send message for server to handle. if recieve status of 200, 
    // set the last message as sent, else, set as unsent
    handleSubmit = (message) => {
        let newMessage = {
            senderId: ObjectId(this.state.user.id), 
            senderName: this.state.user.name,
            conversationId: ObjectId(this.state.currConversation.id), 
            text: message
        }

        this.setMessages(newMessage);

        API.createMessage(newMessage)
        .then(response => {
            if(response.status === 200) {
                // add logic to tell when the last message sent has been
                // delivered or not
            } 
        })
        .catch(err => {
            console.log(err);
            // same as above comment
        })
    }

    setMessages = (newMessage) => {
        this.setState(prevState => {
            let messages = prevState.currConversation.messages;
            messages.push(newMessage);

            return {
                currConversation: {
                    messages: messages
                }
            }
        })
    }

    render() {
        return (
            <div style={{display: "flex"}}>
                <div style={{height: "100vh", width: "20vw"}}>
                    <ConversationForm />
                    <ConversationList conversations={this.state.conversations}/>
                </div>
                <div style={{height: "100vh", width: "80vw", backgroundColor: "rgba(33, 33, 33, 0.6)"}}>
                    <ConversationHeader conversationName="Conversation"/>
                    <MessageContainer 
                        messages={this.state.currConversation.messages}
                    />
                    <MessageForm 
                        getUser={this.getUser}
                    /> 
                </div>
            </div>
        )
    }
}

export default Messaging;