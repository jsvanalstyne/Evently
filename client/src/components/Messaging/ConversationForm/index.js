import React, {useState} from "react";
// importing styling
import "./index.css";
import Modal from 'react-bootstrap/Modal';
import {Button} from 'react-bootstrap'
import Input from "../../Input";
import Recipient from "../Recipient";
import mongoose from "mongoose";
import API from '../../../utils/API.js';

const ObjectId = mongoose.Types.ObjectId;


function ConversationForm(props) {
    
    const [show, setShow] = useState(false);
    const [conversationName, setConversationName] = useState("");
    const [recipients, setRecipients] = useState([]);
    const [recipient, setRecipient] = useState("");
    const [recipientMessage, setRecipientMessage] = useState("");
    const [conversationMessage, setConversationMessage] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addRecipient = (event) => {
        event.preventDefault();
        
        for(const currRecipient of recipients) {
            if(currRecipient.email === recipient) {
                
                return setRecipientMessage("User already exists in recipient list");
            }
        }

        API.getUserByEmail(recipient)
        .then(response => {
            if(response.data.user) {
                setRecipients(prevRecipients => prevRecipients.concat(response.data.user));

                setRecipient("");
                setRecipientMessage("");
            } else {
                setRecipientMessage(response.data.message);
            }
            
        })
        .catch(error => {
            setRecipientMessage("Could not add user");
        })
    }

    const deleteRecipient = (event, recipientId) => {
        event.preventDefault();
        
        setRecipients(prevRecipients => prevRecipients.filter(recipient => recipient._id != recipientId));
    }

    const handleConversationSubmit = (event) => {
        event.preventDefault();
        if(recipients.length < 1) {

            return setConversationMessage("Must enter at least one recipient");
        }

        let userIds = recipients.map(recipient => ObjectId(recipient._id));
        userIds.push(ObjectId(props.userId));

        let conversation = {
            "name": conversationName, 
            "userIds": userIds
        }
        
        API.createConversation(conversation)
        .then(response => {
            if(response.data.message === "conversation created successfully") {
                props.setConversations(prevConversations => {
                    return [response.data.conversation, ...prevConversations]
                });

                handleClose();
            } else {
                setConversationMessage(response.data.message);
            }
        })
        .catch(error => {
            setConversationMessage("Could not create conversation");
        })
    }

    return (
        <>
        <button className="modal-button" onClick={handleShow}>
          <p className="add-sign">+</p>
        </button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create a conversation</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="conversation-form-container">
                        <form className="conversation-form" onSubmit={handleConversationSubmit}>
                            <p>{conversationMessage}</p>
                            <Input 
                                type="input"
                                value={conversationName}
                                onChange={event => setConversationName(event.target.value)}
                                cleanname="Conversation Name"
                                placeholder="Enter a name for your conversation"
                            />
                            <label>Add a recipient</label>
                            <input
                                className="form-control"
                                style={{display: "inline", width: "90%", marginBottom: "10px"}}
                                type="input"
                                value={recipient}
                                onChange={event => setRecipient(event.target.value)}
                                cleanname="New user email"
                                placeholder="Enter an email"
                            />
                            <button onClick={addRecipient} style={{display: "inline"}}>Add</button>
                            <p className="">{recipientMessage}</p>
                            <div className="recipients-container">
                                {recipients.map(recipient => {
                                    return <Recipient 
                                            deleteRecipient={deleteRecipient} 
                                            name={`${recipient.firstName} ${recipient.lastName}`}
                                            id={recipient._id}
                                           />
                                })}
                            </div>
                            <Button variant="primary">Submit</Button>
                        </form>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )


}

export default ConversationForm;