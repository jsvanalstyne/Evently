import React from "react";
import "./style.css";

function SignUpBtn(props) {
    return (
        <span className="navbar-text">
            <button 
                type="button" 
                className="btn btn-outline-success bg-light mr-1" 
                href={props.link}
            >{props.text}</button>
        </span>
    )
}

export default SignUpBtn;