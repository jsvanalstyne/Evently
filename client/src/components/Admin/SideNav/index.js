import React from "react";
import "./index.css";
import SideNavLink from "./SideNavLink";

const imagePathPrefixes = ["Calendar", "Users", "Events", "Programs", "Analytics"]

function SideNav() {

    return (
        <div className="side-nav-container">
            {imagePathPrefixes.map(imagePathPref => <SideNavLink label={imagePathPref} />)}
        </div>
    )
}

export default SideNav;