import React from "react";
import "./index.css";

function Input(props) {
    console.log(props);
    return (
        <div className={props.inline ? "inline-auth-input-container" : "auth-input-container"}>
            <label className="auth-label">{props.cleanname}</label>
            <input 
                className="auth-text-input"
                {...props}
                placeholder={props.cleanname}
            ></input>
        </div>
    )
}

export default Input;