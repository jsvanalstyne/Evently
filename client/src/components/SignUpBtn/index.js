import React from "react";
import "./style.css";

function SignUpBtn(props) {
    return (
        <a role="button" class="btn btn-primary mr-1" href={props.link}>{props.text}</a>
    )
}

export default SignUpBtn;