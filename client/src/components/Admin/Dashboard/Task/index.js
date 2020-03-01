import React from "react";
import "./index.css";

function Task(props) {
    return (
        <div className="task-container">
            <h5 className="task-name-display">{props.data.name}</h5>
            <p className="task-description-display">{props.data.description}</p>
            <p className="task-duration-display">{props.data.startTime} - {props.data.endTime}</p>
        </div>
    )
}

export default Task;