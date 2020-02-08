import React from "react";
import NavLink from "../NavLink";
import SignUpBtn from "../SignUpBtn";
import SignupModal from "../SignupModal"
import SignUpForm from '../SignUpForm';
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">{props.children}
            <a className="navbar-brand landing-title" href="/">Evently</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                   <NavLink 
                    link={"/features"}
                    text={"Features"}
                   />
                   <NavLink 
                    link={"/funtivity"}
                    text={"Fun Page"}
                   />
                </ul>
                <span className="navbar-text">
                    <SignupModal 
                        title={"Sign Up"}
                        closeBtnText="Sign up"
                    />
                </span>
            </div>
        </nav>

    )
}

export default Nav;

// change the list items to components, so I would have a a <NavLink> with props that would be props.link props.text for each header components
// components for login and sign up button
// move the body styling stuff to the css sheet for the landing page js file
// features page