import React from "react";
import "./style.css"

function Card(props) {
  return (
    <div className="card title shadow-lg p-3 mb-5 bg-white rounded">
        <h2>{props.title}</h2>
   
      
    </div>
  );
}

export default Card;