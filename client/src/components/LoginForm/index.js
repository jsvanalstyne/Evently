// importing React and component for jsx and whatnot
import React, { Component } from "react";
// importing styles from index.css
import "./index.css";
// importing Input component to be reused in our form
import Input from "../Input"
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';


/* creating stateful login component
** state: 
**   email and password values
**   hidePassword options that users can toggle 
**   between hiding password and not
** methods: 
**   handleSubmit: 
**      pass to form element, prevent default event,
**      send to server for validation 
**      and then respond based on status and message
**   handleInputChange: 
**      pass to input component to handle change 
**      input field's value
**   togglePasswordVisbility: 
**      used to check and uncheck hide password box
*/

export default withAuth(class LoginForm extends Component {
    constructor(props) {
        super(props);

        // setting state to empty values for email and 
        // password and hidePassword to false
        this.state = {
            email: "", 
            password: "",
            hidePassword: true, 
            sessionToken: null
        }

        this.oktaAuth = new OktaAuth({ url: "http://localhost:3000" });

    }

    // WRITE COMMENTS BEFORE SUBMIT FOR PR
    handleSubmit = event => {
        event.preventDefault();
        console.log("we got in here");
        console.log(this.state.email);
        console.log(this.state.password);

        this.oktaAuth.signIn({
          username: this.state.username,
          password: this.state.password
        })
        .then(res => {
            console.log(res);
            
            return this.setState({
                sessionToken: res.sessionToken
            })
        })
        .catch(err => console.log('Found an error', err));
    }

    // used to handle change in value on input field
    // takes implied event from user typing action
    handleInputChange = (event) => {
        // grab name and value by destructuring target object 
        // on event
        const { name, value } = event.target;

        // generically referencing property of respective
        // state value 
        this.setState({
            [name]: value
        })
    }

    // passed to checkbox to handle click
    togglePasswordVisbility = () => {
        this.setState(prevState => {
            return {
                // changes the value of hidePassword
                // in state to the opposite of what 
                // it was previously
                hidePassword: !prevState.hidePassword
            }
        })
    }

    render() {
        if (this.state.sessionToken) {
            this.props.auth.redirect({sessionToken: this.state.sessionToken});
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit} className="auth-form float-right">
                <h3 className="auth-header" align="center">Sign in</h3>
                <Input 
                    name={"email"}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="Email"
                />
                <Input 
                    name={"password"}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    // changing input type to hide password based on hidePassword
                    type={this.state.hidePassword ? "password" : "text"}
                    cleanname="Password"
                />
                <input 
                    className="auth-checkbox"
                    type="checkbox" 
                    onChange={this.togglePasswordVisbility}
                    checked={!this.state.hidePassword}
                >
                </input>
                <label className="auth-checkbox-label">Show password</label>
                <button className="auth-submit-button">Sign in</button>
            </form>
        )
    }
});