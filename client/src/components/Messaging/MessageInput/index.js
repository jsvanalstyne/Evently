import React, { Component } from 'react';

class MessageInput extends Component {
    constructor() {
        super();

        state = {
            message: ""
        }
    }

    updateMessage = (event) => {
        const {name, value} = event.target;

        this.setState({
            [name]: value
        })
    }

    render() {
        <form>
            <input
                name="message"
                value={this.state.message}
                type="text"
                onChange={this.updateMessage}
            ></input>
            <button>Submit</button>
        </form>
    }


}