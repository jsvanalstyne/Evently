import React, { Component } from 'react';
import "./index.css";
import API from '../../../utils/API';
// importing ObjectId from mongoose
import { ObjectId } from "mongoose"

class MessageForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "", 
        }
    }

    updateMessage = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }
    

    render() {
        return (
        <div style={{padding: "0 40px"}}>
        <div className="form-container">
            <form onSubmit={() => this.props.handleSubmit(this.state.message)} className="message-form">
                <input
                    name="message"
                    value={this.state.message}
                    type="text"
                    onChange={this.updateMessage}
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


}

export default MessageForm