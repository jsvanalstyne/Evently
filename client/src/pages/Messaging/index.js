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
import React, { useState, useEffect } from "react";
import "./index.css"
// importing client-side socket.io
import socketClient from "socket.io-client";
// cereating socket at local host for testing
const PORT = process.env.PORT || "http://127.0.0.1:3030/messages";
// Conversation list component containing all conversations
// that users are a part of
const socket = socketClient(PORT, {}).connect();

function Messaging() {

    const [conversations, setConversations] = useState([]);
    const [currConversation, setCurrConversation] = useState({});
    const [user, setUser] = useState({});
    // get all conversations and default display messages
    const getConversations = () => {
        API.getAllConversations()
        .then(result => {
            console.log(result);
            setConversations(result.data.conversations);
            setCurrConversation({
                messages: result.data.messages, 
                _id: result.data.conversations[0]._id, 
                name: result.data.conversations[0].name, 
            })
            setUser(result.data.user);
        });
    }
    // on load, grabs all conversations and messages from default conversation
    // that the current user is involved in
    useEffect(() => {
        console.log("ew got in here");
        getConversations();
        
    }, [])

    // socket.on("id", socketId => {
    //     console.log("we got in here");

    //     const currSocketId = localStorage.getItem("socketId");
    //     console.log(`curr socket Id: ${currSocketId}`);
    //     console.log(`ppotentially new socket id: ${socketId}`);
    //     if(currSocketId !== socketId) {
    //         API.createSocketConnection(socketId)
    //         .then(response => {
    //             console.log(response);
    //             if(response.status === 200) {
    //                 localStorage.setItem("socketId", response.data.socketId)
    //             }
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //     }
    // })

    socket.on("connect", () => {
        console.log("we're connected at: " + socket.id);

        const currSocketId = localStorage.getItem("socketId");
        console.log(`curr socket Id: ${currSocketId}`);
        console.log(`ppotentially new socket id: ${socket.id}`);
        if(currSocketId !== socket.id) {
            API.createSocketConnection(socket.id)
            .then(response => {
                console.log(response);
                if(response.status === 200) {
                    console.log("local should be set to: " + response.data.socketId);
                    localStorage.setItem("socketId", response.data.socketId)
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
        // API.createSocketConnection(socket.id)
        // .then(response => {
        //     console.log(response);
        // })
        // .catch(error => {
        //     console.log(error);
        // })    
    });

    socket.on("disconnect", reason => {
        console.log(reason);
        socket.connect();
    })

    socket.on("connect_error", error => {
        console.log(error);
    })

    socket.on("reconnect", Infinity => {
        console.log("blah");
    })

    socket.on("newMessage", message => {
        // if the incoming message is part of the displayed conversation, 
        // add it update the messages on currConversation w
        console.log(currConversation);
        console.log(conversations);
        console.log(message);

        if(message.conversationId == currConversation._id) {
            console.log("we go tin here");
            setMessages(message);
            return;
        }
        // } else {
        //     console.log("we also got in here because who doesn't want 4 of the same response");
        //     let newConversations = conversations.map(conversation => {
        //         if(conversation._id == message.conversationId) {
        //             conversation.hasNewMessage = true;
        //         }
        //     })

        //     setConversations(newConversations);
        // }
    })

    const setMessages = newMessage => {
        let newMessages = currConversation.messages.concat(newMessage);

        setCurrConversation({...currConversation, messages: newMessages})
    }

    const getNewConversation = (conversationId) => {
        if(conversationId !== currConversation._id) {
            API.getMessagesByConversation(conversationId)
            .then(response => {
                if(response.status === 200 && response.data.messages.length > 0) {
                    setCurrConversation({
                        name: response.data.messages[0].conversationId.name, 
                        _id: conversationId, 
                        messages: response.data.messages
                    })
                } else {
                    API.getConversationById(conversationId)
                    .then(response => {
                        setCurrConversation({
                            name: response.data.conversation.name, 
                            _id: conversationId, 
                            messages: []
                        })
                    })
                    .catch(error => {
                        console.log(error);
                        console.log("error");
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
        }
    }
    return (
            <div style={{display: "flex", borderBottom: "1px solid rgb(33, 33, 33)"}}>
                <div style={{height: "100vh", width: "20vw"}}>
                    <div className="conversation-list">
                        <div className="conversation-header-and-modal-container">
                            <h4 className="conversation-header">Conversations</h4>
                            <ConversationForm 
                                userId={user.id}
                                setConversations={setConversations}
                            />
                        </div> 
                        {conversations ? conversations.map(conversation => {
                            return (
                                <div className="conversation-container" key={conversation._id}> 
                                    <a 
                                     onClick={() => getNewConversation(conversation._id)}
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
                    <ConversationHeader conversationName={currConversation.name}/>
                    <MessageContainer 
                        currConversation={currConversation}                        
                        user={user}
                    />
                </div>
            </div>
    );
}

export default Messaging;