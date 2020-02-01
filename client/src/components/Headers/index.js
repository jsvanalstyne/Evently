import React from "react";
import "./style.css"

function Headers(props){
return(
    <div>
        <h1 className="heading text-center ">{props.heading}</h1>
    </div>
)
}

export default Headers;