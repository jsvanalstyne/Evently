import React from "react";
import "./index.css";

function SideNavLink(props) {
    const getURLLocation = (label) => {
        let formattedLabel = label[0].toLowerCase() + label.substring(1);

        return "/admin/" + formattedLabel;
    }

    return (
        <div className="side-nav-link-container" onClick={() => window.location = getURLLocation(props.label)}>
            <img className="side-nav-icon" src={`/side-nav-icons/${props.label}-icon.png`}/>
            <a className="side-nav-link">{props.label}</a>
        </div>
    )
}

export default SideNavLink;