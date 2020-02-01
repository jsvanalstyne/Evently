import React from "react";
import "./style.css"

function Border(props) {
    return (
        <div className="block-example border border-dark borderStyle">
         {props.children}   </div>
    );
  }
  
  export default Border;