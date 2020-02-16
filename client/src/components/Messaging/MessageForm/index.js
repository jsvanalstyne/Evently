import React, {useState} from 'react';
import "./index.css";
import API from '../../../utils/API';
// importing ObjectId from mongoose
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId

function MessageForm(props) {
    const [message, setMessage] = useState("");

    // send message for server to handle. if recieve status of 200, 
    // set the last message as sent, else, set as unsent
    const handleMessageSubmit = (event) => {
        event.preventDefault();

        let newMessage = {
            senderId: ObjectId(props.user.id), 
            senderName: props.user.name,
            conversationId: ObjectId(props.conversationId), 
            text: message
        }

        console.log(props.conversationId);

        API.createMessage(newMessage)
        .then(response => {
            console.log(response);
            if(response.status === 200) {
                // add logic to tell when the last message sent has been
                // delivered or not
                props.setMessages(newMessage);
            } else {
                console.log("not suppposed to be inhere");
                // set a warning message
            }
        })
        .catch(err => {
            console.log(err);
            // same as above comment
        })
    }

    return (
        <div style={{padding: "0 40px"}}>
        <div className="form-container">
            <form onSubmit={handleMessageSubmit} className="message-form">
                <input
                    name="message"
                    value={message}
                    type="text"
                    onChange={event => setMessage(event.target.value)}
                    className="message-input"
                    placeholder="Message"
                ></input>
            </form>
            <div className="message-toolbar">
                <p>dsfasdf</p>
            </div>
        </div>
        </div> 
    )
}

export default MessageForm