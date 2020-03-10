// importing messaging components
// holds all messages in main body of char
import MessageContainer from "../../components/Messaging/MessageContainer";
// form for creating and sending messages
import MessageForm from "../../components/Messaging/MessageForm";
// heading letting user know which conversation they're on
import ConversationHeader from "../../components/Messaging/ConversationHeader";
// importing conversation form to create conversations
import ConversationForm from "../../components/Messaging/ConversationForm";
//importing navbar 
import Nav from "../../components/Nav"
// importing messaging api for resource server interactions
import API from "../../utils/API"
// importing react and necessary hooks
import React, { Component } from "react";
import "./index.css"
// importing client-side socket.io
import socketClient from "socket.io-client";
// cereating socket at local host for testing
const PORT = process.env.PORT || "http://127.0.0.1:3030";
// Conversation list component containing all conversations
// that users are a part of
// let socket = socketClient.connect(PORT);


class Messaging extends Component {
    constructor() {
        super()

        this.state = {
            conversations: [],
            currConversation: {}, 
            user: {}, 
        }
    }

    componentDidMount = () => {
        this.socket = socketClient.connect("https://evently2020.herokuapp.com/api/");
        
        this.connectListener();

        API.getAllConversations()
        .then(result => {
            const { messages, conversations, user} = result.data
            var currConversation;
            
            if(!conversations) {
                currConversation = {}
            } else {
                currConversation = this.formatCurrConversation(messages, conversations)
            }
            
            

            this.setState({
                conversations: conversations, 
                currConversation: currConversation, 
                user: user
            })

        })
    }

    componentWillUnmount = () => {
        this.socket.close();
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

    getConversation = conversationId => {
        for(const conversation of this.state.conversations) {
            if(conversation._id == conversationId) {
                return conversation;
            }
        }

        return null;
    }

    sentMessageListener = () => {
        this.socket.on("sentMessage", sentMessage => {
            if(sentMessage.conversationId == this.state.currConversation._id) {
                this.updateCurrConversationMessages(sentMessage)

                return;
            }

            let sentConversation = this.getConversation(sentMessage.conversationId)

            if(sentConversation) {
                sentConversation.hasNewMessage = true;

                let filteredConversations = this.state.conversations.filter(conv => {
                    return conv._id != sentConversation._id
                })

                this.setState({
                    conversations: [sentConversation, ...filteredConversations]
                })
            }
            
        })
    }

    reconnectListener = () => {
        this.socket.on("reconnect", numTurn => {
            console.log(numTurn)
            this.socket.connect();
        })
    }

    connectListener = () => {
        this.socket.on("connect", () => {
            this.setSocketId(this.socket.id)
            this.sentMessageListener()
        })
    }

    setCurrConversation = conversation => {
        conversation.hasNewMessage = false;

        API.getMessagesByConversation(conversation._id)
        .then(response => {
            this.setState({
                currConversation: {
                    messages: response.data.messages, 
                    _id: conversation._id, 
                    name: conversation.name
                }
            })
        })
    }

    render() {
        return (
            <div>
            <Nav />
            <div style={{display: "flex", borderBottom: "1px solid rgb(33, 33, 33)"}}>
                <div style={{height: "91vh", width: "20vw", minWidth: "160px"}}>
                    <div className="conversation-list">
                        <div className="conversation-header-and-modal-container">
                            <h5 className="conversation-header">Conversations</h5>
                            <ConversationForm 
                                userId={this.state.user.id}
                                conversations={this.state.conversations}
                                setConversations={this.setConversations}
                            />
                        </div> 
                        {this.state.conversations ? this.state.conversations.map(conversation => {
                            let convClass = conversation.hasNewMessage ? "conversation-title new-message" : "conversation-title"

                            return (
                                <div className="conversation-container" key={conversation._id}># 
                                    <a 
                                     style={{marginLeft: "10px", color: "#666565"}}
                                     onClick={() => this.setCurrConversation(conversation)}
                                     className={convClass}
                                     conversationid={conversation.id}
                                     >{conversation.name}
                                    </a>
                                </div>
                            )
                        }) : <p>lame</p>}
                    </div>
                </div>
                <div style={{height: "90vh", width: "80vw", backgroundColor: "#fff", opacity: "0.6)"}}>
                    <ConversationHeader conversationName={this.state.currConversation.name}/>
                    <MessageContainer 
                        currConversation={this.state.currConversation}                        
                        user={this.state.user}
                        socket={this.socket}
                    />
                </div>
            </div>
            </div>
        );
    }
}

export default Messaging;