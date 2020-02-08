import React from "react";
import "./index.css";

function Input(props) {
    return (
        <div className="form-group">
            <label htmlFor={props.for}>{props.cleanname}</label>
            <input
                className="form-control"
                id={props.id}
                type={props.type}
                name={props.name}
                onChange={props.onChange}
                cleanname={props.cleanname}
                placeholder={props.cleanname}
            ></input>
        </div>
            )
}

export default Input;