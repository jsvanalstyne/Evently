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


// Conversation list component containing all conversations
// that users are a part of
function Messaging() {

    const [conversations, setConversations] = useState([]);
    const [currConversation, setCurrConversation] = useState({});
    const [user, setUser] = useState({});
    // get all conversations and default display messages
    const getConversations = (cb) => {
        API.getAllConversations()
        .then(cb);
    }
    // on load, grabs all conversations and messages from default conversation
    // that the current user is involved in
    useEffect(() => {
        getConversations(result => {
            console.log(result.data.messages);
            // setting initial state with all conversations, all messages, 
            // and the respective user information
            setConversations(result.data.conversations);
            setUser(result.data.user);
            setCurrConversation({
                messages: result.data.messages, 
                _id: result.data.conversations[0]._id, 
                name: result.data.conversations[0].name
            })
        })
    }, [])

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
                        {conversations.map(conversation => {
                            return (
                                <div className="conversation-container">
                                    <a 
                                     onClick={() => getNewConversation(conversation._id)}
                                     key={conversation._id} 
                                     className="conversation-title" 
                                     conversationid={conversation.id}
                                    >{conversation.name}
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{height: "100vh", width: "80vw", backgroundColor: "rgba(33, 33, 33, 0.6)"}}>
                    <ConversationHeader conversationName={currConversation.name}/>
                    <MessageContainer 
                        currConversation={currConversation}                        
                        user={user}
                        setCurrConversation={setCurrConversation}
                    />
                </div>
            </div>
    );
}

export default Messaging;