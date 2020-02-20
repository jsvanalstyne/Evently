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
                        <a href="/login" type="button" className="btn contact-features-btn">{props.buttontext}</a>
                    </div>
                </div>
        </div>
    )
}

export default FeaturesJumbo;