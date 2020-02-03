import React from "react";
import "./index.css";

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.for}>{props.cleanname}</label>
            <input
                className="form-control"
                name={props.name}
                cleanname={props.cleanname}
                type={props.type}
                onChange={props.onChange}
                checked={props.checked}
                placeholder={props.cleanname}
            ></input>
        </div>
    )
}

export default Input;