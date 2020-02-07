// importing React and component for jsx and whatnot
import React, {Component} from "react";
// importing styles from index.css
import "./index.css";
// importing Input component to be reused in our form
import Input from "../Input";
// importing axios to send info to 
import axios from 'axios'
// importing withAuth and OktaAuth
import OktaAuth from '@okta/okta-auth-js';
import { withAuth } from '@okta/okta-react';
import Button from 'react-bootstrap/Button';


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

export default withAuth(class SignUpForm extends Component {
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
            dateOfBirth: "", 
            street: "", 
            zipcode: "",
            city: "", 
            stateCode: "",
            sessionToken: null
        }

        this.oktaAuth = new OktaAuth({ url: "https://dev-844753.okta.com" });
    }

    checkAuthentication = async() => {
        const sessionToken = await this.props.auth.getIdToken();
        if (sessionToken) {
          this.setState({ sessionToken });
        }
      }
  
      componentDidUpdate = () => {
        this.checkAuthentication();
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

    handleSubmit = event => {
        event.preventDefault();
        
        let user = {
            "profile": {
                "firstName": this.state.firstName, 
                "lastName": this.state.lastName, 
                "email": this.state.email,
                "login": this.state.email
            }, 
            "credentials": {
                "password": {
                    value: this.state.password
                }
            }
        }

        let account = {
            "dateOfBirth": this.state.dateOfBirth, 
            "street": this.state.street, 
            "zipcode": this.state.zipcode, 
            "city": this.state.city, 
            "stateCode": this.state.stateCode
        }

        axios({
            method: 'post',
            url: "/api/users",
            data: {
                "user": user, 
                "account": account
            }
        })
        .then(response => {
            console.log(response);
            this.props.handleClose();
        })
        .catch(err => {
            console.log(err);
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
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
                    name="dateOfBirth"
                    value={this.state.dateOfBirth}
                    onChange={this.handleInputChange}
                    type="date"
                    cleanname="Date of Birth"
                />
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
                <div className="inline-input-container">
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
                </div>
                <button>Submit</button>
            </form>
        )
    }
});
