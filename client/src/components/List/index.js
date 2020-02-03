import React from "react";
import "./style.css"

function List(props){
    return (
    <div>
          <p className="listItem border border-dark rounded-pill"><a href="#">{props.event}</a><p>{props.date}</p></p>
    </div>
    )
}

export default List;