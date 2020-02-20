import React from "react";
// import LoginForm from "../LoginForm";
import Container from "../Container"
import "./style.css";

function FeaturesJumbo(props) {
    return (
        <div class="jumbotron jumbotron-fluid feature-jumbo-bg">
                <div className="row ">
                    <div className="col-9 feature-jumbo-text">
                        <h1 className="display-4">{props.mainText}</h1>
                        <p className="lead">{props.smallText}</p>
                        <button type="button" className="btn contact-features-btn">{props.buttontext}</button>
                    </div>
                </div>
        </div>
    )
}

export default FeaturesJumbo;