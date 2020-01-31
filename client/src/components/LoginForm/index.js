// importing React and component for jsx and whatnot
import React, {Component} from "react";
// importing styles from index.css
import "./index.css";
// importing Input component to be reused in our form
import Input from "./Input";

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

class LoginForm extends Component {
    constructor() {
        super();

        // setting state to empty values for email and 
        // password and hidePassword to false
        this.state = {
            email: "", 
            password: "",
            hidePassword: true
        }
    }

    // used to handle change in value on input field
    // takes implied event from user typing action
    handleInputChange = (event) => {
        // grab name and value by destructuring target object 
        // on event
        const {name, value} = event.target;

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
        return (
            <form className="auth-form">
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
}

export default LoginForm;