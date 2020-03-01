import React from "react";
import "./index.css"
function DayAndDateDisplay(props) {
    let classStyle = props.isCurrDay ? "date-of-week-display curr-day" : "date-of-week-display";

    return (
        <div className="day-of-week-container" onClick={props.onClick}>
            <h5 className="day-of-week-display">{props.dayOfWeek}</h5>
            <p className={classStyle}>{props.dayAsNumber}</p>
        </div>
    )
}

export default DayAndDateDisplay;