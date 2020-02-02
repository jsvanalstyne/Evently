import React from "react";
// import LoginForm from "../LoginForm";
import Container from "../Container"
import "./style.css";

function FeaturesJumbo(props) {
    return (
        <div class="jumbotron jumbotron-fluid">
            <Container>
                <div className="row">
                    <div className="col-9">
                        <h1 className="display-4">{props.mainText}</h1>
                        <p className="lead">{props.smallText}</p>
                        <button type="button" className="btn btn-primary">{props.buttontext}</button>
                    </div>
                    
                </div>
                
            </Container>
        </div>
    )
}

export default FeaturesJumbo;