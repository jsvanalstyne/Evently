import React, { Component } from "react";
import NavLink from "../NavLink";
import SignUpBtn from "../SignUpBtn";
import SignupModal from "../SignupModal"
import SignUpForm from '../SignUpForm';
import "./style.css";
import Logout from "../Logout";
import { withAuth } from '@okta/okta-react';


export default withAuth(class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: null
        };
        this.checkAuthentication();
    }

    async checkAuthentication() {
        const authenticated = await this.props.auth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate() {
        this.checkAuthentication();
    }

    render() {
        console.log(this.state.authenticated);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">{this.props.children}
                <a className="navbar-brand landing-title" href="/">Evently</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    {this.state.authenticated ?
                        <ul className="navbar-nav mr-auto">
                            <NavLink
                                link={"/features"}
                                text={"Features"}
                            />
                            <NavLink
                                link={"/funtivity"}
                                text={"Events and Programs"}
                            />
                            <NavLink
                                link={"/dashboard"}
                                text={"Dashboard"}
                            />
                            <NavLink
                                link={"/account"}
                                text={"My Account"}
                            />
                        </ul> :
                        <ul>
                            <NavLink
                                link={"/features"}
                                text={"Features"}
                            />
                        </ul>
                    }

                    <span className="navbar-text">
                        {this.state.authenticated ?
                            <Logout /> :
                            <SignupModal
                                title={"Sign Up"}
                                closeBtnText="Sign up"
                            />
                        }
                    </span>
                </div>
            </nav>
        )
    }

});


// change the list items to components, so I would have a a <NavLink> with props that would be props.link props.text for each header components
// components for login and sign up button
// move the body styling stuff to the css sheet for the landing page js file
// features page