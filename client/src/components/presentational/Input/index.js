import React from "react";
import "./index.css";

function Input(props) {
    return (
        <div className="auth-input-container">
            <label className="auth-label">{props.name}</label>
            <input 
                className="auth-text-input"
                {...props}
                placeholder={props.name}
            ></input>
        </div>
    )
}

export default Input;