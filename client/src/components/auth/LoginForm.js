// importing React and component for jsx and whatnot
import React, { Component } from "react";
// importing Input component to be reused in our form
import Input from "../Input"
// importing Okta modules 
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import Nav from "../Nav"
import "./login.css"

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
**   handleSubmit: 
**      taken from Okta docs: https://developer.okta.com/code/react/okta_react/
**      uses OktaAuth object binded to component to sign in to auth server
**      with username and password supplied from login form
**      on success, sets the sessionToken on state to the one returned. On error, 
**      (currently) logs the error
*/

export default withAuth(class LoginForm extends Component {
    constructor(props) {
        // adding props for auth object from Okta
        super(props);
        // setting state to empty values for email and 
        // password and hidePassword to false
        this.state = {
            email: "",
            password: "",
            hidePassword: true, 
            // adding session token to state, default as null
            sessionToken: null
        }
        // adding base url supplied from auth server (Okta)
        this.oktaAuth = new OktaAuth({ url: props.baseUrl });
        this.onSuccess = props.onSuccess;

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
    // 
    handleSubmit = (event) => {
        event.preventDefault();
        this.oktaAuth.signIn({
            username: this.state.email,
            password: this.state.password
        })
        .then(this.onSuccess)
        .catch(err => console.log('Found an error', err));
    }
    // rendering component
    render() {
        return (
            <div className="container reroute-login-container">
                <form onSubmit={this.handleSubmit}>
                <Input
                    name={"email"}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="Email"
                    id="login-email"
                    htmlFor="login-email"
                />
                <Input
                    name={"password"}
                    value={this.state.value}
                    onChange={this.handleInputChange}
                    // changing input type to hide password based on hidePassword
                    type={this.state.hidePassword ? "password" : "text"}
                    cleanname="Password"
                    id="login-password"
                    htmlFor="login-password"
                />
                <Input
                    name={"auth-checkbox"}
                    cleanname={"Show Password"}
                    type="checkbox"
                    onChange={this.togglePasswordVisbility}
                    checked={!this.state.hidePassword}
                />
                <button type="submit" className="btn route-login-btn mb-2">Sign in</button>
            </form>
            </div> 
        )
    }
});