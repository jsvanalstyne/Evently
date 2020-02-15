import React, {Component} from "react";
// importing styling
import "./index.css";
import Modal from 'react-bootstrap/Modal';
import Input from "../../Input";
import API from '../../../utils/API.js';

function ConversationForm(props) {
    
    const [show, setShow] = useState(false);
    const [name, setName] = useState("");
    const [recipients, setRecipients] = useState([]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (event) => {
        setName(event.value);
    }

    const handleSubmit = () => {
        // send the information to the server
        // if the conversation is created, then 
        // close the modal, if not, display error
        // message
        API.createConversation()
    }
/*
id={props.id}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                cleanname={props.cleanname}
                placeholder={props.cleanname}
*/
    return (
        <div className="conversation-form-container">
            <h3 className="conversation-form-header">Create a conversation</h3>
            <form className="conversation-form" onSubmit={handleSubmit}>
                <Input 
                    type="input"
                    name="Name"
                    onChange={handleChange}
                    cleanname="Name"
                    placeholder="Enter a name for your conversation"
                />
                <button>Submit</button>
            </form>
        </div>
        
        
    )


}

export default ConversationForm;