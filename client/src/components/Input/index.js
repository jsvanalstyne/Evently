import React from "react";
import "./index.css";

function Input(props) {
    console.log(props);
    return (
        <div className="form-group">
            <label for={props.for}>{props.cleanname}</label>
            <input
                className="form-control"
                id={props.id}
                type={props.type}
                {...props}
                placeholder={props.cleanname}
            ></input>
        </div>
            )
}

export default Input;