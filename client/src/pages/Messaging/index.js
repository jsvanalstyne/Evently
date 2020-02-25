// importing messaging components
// holds all messages in main body of char
import MessageContainer from "../../components/Messaging/MessageContainer";
// form for creating and sending messages
import MessageForm from "../../components/Messaging/MessageForm";
// heading letting user know which conversation they're on
import ConversationHeader from "../../components/Messaging/ConversationHeader";
// importing conversation form to create conversations
import ConversationForm from "../../components/Messaging/ConversationForm";
// importing messaging api for resource server interactions
import API from "../../utils/API"
// importing ObjectId from mongoose
import {ObjectId} from "mongoose"
// importing react and necessary hooks
import React, { Component } from "react";
import "./index.css"
// importing client-side socket.io
import socketClient from "socket.io-client";
// cereating socket at local host for testing
const PORT = process.env.PORT || "http://127.0.0.1:3030";
// Conversation list component containing all conversations
// that users are a part of
let socket = socketClient.connect(PORT);


class Messaging extends Component {
    constructor() {
        super()

        this.state = {
            conversations: [],
            currConversation: {}, 
            user: {}, 
            socketId: 0
        }
    }

    componentDidMount = () => {
        this.idListener();
        API.getAllConversations()
        .then(result => {
            const { messages, conversations, user} = result.data

            let currConversation = this.formatCurrConversation(messages, conversations)

            this.setState({
                conversations: conversations, 
                currConversation: currConversation, 
                user: user
            })

        })
    }

    componentWillUnmount = () => {
        socket.close();
    }

    formatCurrConversation = (messages, conversations) => {
        const currConversation = {
            messages: messages, 
            _id: conversations[0]._id, 
            name: conversations[0].name
        }

        return currConversation
    }

    setConversations = (conversations) => {
        this.setState({
            conversations: conversations
        })
    }

    setSocketId = (socketId) => {
        const currSocketId = localStorage.getItem("socketId");
        
        if(currSocketId !== socketId) {
            API.createSocketConnection(socketId)
            .then(response => {
                if(response.status === 200) {
                    localStorage.setItem("socketId", response.data.socketId)
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }

    updateCurrConversationMessages = newMessage => {
        this.setState(prevState => {
            let {messages, _id, name} = prevState.currConversation;
            let newMessages = [...messages, newMessage];
            
            return {
                currConversation: {
                    messages: newMessages, 
                    _id: _id, 
                    name: name
                }
            }
        })
    }

    sentMessageListener = () => {
        socket.on("sentMessage", sentMessage => {
            if(sentMessage.conversationId == this.state.currConversation._id) {
                this.updateCurrConversationMessages(sentMessage)
            }
        })
    }

    reconnectListener = () => {
        socket.on("reconnect", numTurn => {
            socket.connect();
        })
    }

    idListener = () => {
        socket.on("id", socketId => {
            this.setSocketId(socketId)
            this.sentMessageListener()
        })
    }

    render() {
        return (
            <div style={{display: "flex", borderBottom: "1px solid rgb(33, 33, 33)"}}>
                <div style={{height: "100vh", width: "20vw"}}>
                    <div className="conversation-list">
                        <div className="conversation-header-and-modal-container">
                            <h4 className="conversation-header">Conversations</h4>
                            <ConversationForm 
                                userId={this.state.user.id}
                                conversations={this.state.conversations}
                                setConversations={this.setConversations}
                            />
                        </div> 
                        {this.state.conversations ? this.state.conversations.map(conversation => {
                            return (
                                <div className="conversation-container" key={conversation._id}> 
                                    <a 
                                     // onClick={() => getNewConversation(conversation._id)}
                                     className="conversation-title" 
                                     conversationid={conversation.id}
                                     >{conversation.name}
                                    </a>
                                </div>
                            )
                        }) : <p>lame</p>}
                    </div>
                </div>
                <div style={{height: "100vh", width: "80vw", backgroundColor: "rgba(33, 33, 33, 0.6)"}}>
                    <ConversationHeader conversationName={this.state.currConversation.name}/>
                    <MessageContainer 
                        currConversation={this.state.currConversation}                        
                        user={this.state.user}
                        socket={socket}
                    />
                </div>
            </div>
        );
    }
}

export default Messaging;