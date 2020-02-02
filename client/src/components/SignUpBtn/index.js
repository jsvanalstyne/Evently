import React from "react";
import "./style.css";

function SignUpBtn(props) {
    return (
        <button role="button" class="btn btn-primary mr-1" data-toggle={props.modal} data-target={props.modalid}>{props.text}</button>
    )
}

export default SignUpBtn;