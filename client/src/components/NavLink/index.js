import React from "react";
import "./style.css";

function NavLink(props) {
    return (
        <li class="nav-item">
            <a class="nav-link" href={props.link}>{props.text} <span class="sr-only"></span></a>
        </li>
    )
}

export default NavLink;