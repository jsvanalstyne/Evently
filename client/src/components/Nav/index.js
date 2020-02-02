import React from "react";
import NavLink from "../NavLink";
import SignUpBtn from "../SignUpBtn"
import "./style.css";

function Nav(props) {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-secondary">{props.children}
            <a class="navbar-brand landing-title" href="/">Evently</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                   <NavLink 
                    link={"/features"}
                    text={"Features"}
                   />
                </ul>
                <span class="navbar-text">
                    <SignUpBtn
                        link={"/signup"}
                        text={"Sign up"}
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