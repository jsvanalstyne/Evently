import React from "react";
import "./style.css";

function SignUpBtn(props) {
    return (
        <button type="button" class="btn btn-outline-success bg-light mr-1" href={props.link}>{props.text}</button>
    )
}

export default SignUpBtn;