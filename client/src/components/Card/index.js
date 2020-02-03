import React from "react";
import "./style.css"

function Card(props) {
  return (
    <div className="card titles shadow-lg p-4 mb-5 bg-white rounded dashCard">
        <h2 >{props.title}</h2>
       {props.children}
        
   
      
    </div>
  );
}

export default Card;