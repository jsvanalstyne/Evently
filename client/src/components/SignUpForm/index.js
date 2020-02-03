// importing React and component for jsx and whatnot
import React, {Component} from "react";
// importing styles from index.css
import "./index.css";
// importing Input component to be reused in our form
import Input from "../Input";

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
            hidePassword: true, 
            firstName: "", 
            lastName: "", 
            dayOfBirth: "", 
            monthOfBirth: "", 
            yearOfBirth: "", 
            street: "", 
            zipcode: "",
            city: "", 
            stateCode: ""
        }
    }

    // used to handle change in value on input field
    // takes implied event from user typing action
    handleInputChange = (event) => {
        // grab name and value by destructuring target object 
        // on event
        const {name, value} = event.target;
        console.log(event.target);
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
                <h3>Sign Up</h3>
                <h4>Profile</h4>
                <hr className="auth-section-divider"/>
                <div className="inline-input-container">
                    <Input
                        name="firstName"
                        value={this.state.firstName} 
                        onChange={this.handleInputChange}
                        type="text"
                        cleanname="First name"
                        inline="true"
                    />
                    <Input
                        name="lastName"
                        value={this.state.firstName} 
                        onChange={this.handleInputChange}
                        type="text"
                        cleanname="Last name"
                        inline="true"
                    />
                </div>
                <Input 
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="Email"
                />
                <Input 
                    name="password"
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    // changing input type to hide password based on hidePassword
                    type={this.state.hidePassword ? "password" : "text"}
                    cleanname="Password"
                />
                <Input
                    name={"auth-checkbox"}
                    cleanname={"Show Password"}
                    type="checkbox"
                    onChange={this.togglePasswordVisbility}
                    checked={!this.state.hidePassword}
                />
                <h4>Address</h4>
                <hr className="auth-section-divider"/>
                <Input
                    name="street"
                    value={this.state.street} 
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="Street"
                />
                <Input
                    name="city"
                    value={this.state.city} 
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="City"
                />
                <Input
                    name="zipcode"
                    value={this.state.zipcode} 
                    onChange={this.handleInputChange}
                    type="number"
                    cleanname="Zipcode"
                    inline="true"
                />
                <Input
                    name="stateCode"
                    value={this.state.stateCode} 
                    onChange={this.handleInputChange}
                    type="text"
                    cleanname="State Code"
                    inline="true"
                />
                <button type="submit" className="btn btn-primary mb-2">Sign in</button>
            </form>
        )
    }
}

export default LoginForm;