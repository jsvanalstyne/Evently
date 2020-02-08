import React from "react";
import "./style.css";

function NavLink(props) {
    return (
        <li className="nav-item">
            <a className="nav-link" href={props.link}>{props.text} <span className="sr-only"></span></a>
        </li>
    )
}

export default NavLink;