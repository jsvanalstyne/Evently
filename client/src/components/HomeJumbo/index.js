import React from "react";
import Container from "../Container"
import Login from "../auth/Login.js"l
import "./style.css";

function HomeJumbo(props) {
    return (
        <div className="jumbotron jumbotron-fluid landingJumbo">
            <Container>
                <div className="row">
                    <div className="col-6">
                        <h1 className="display-4">{props.mainText}</h1>
                        <p className="lead">{props.smallText}</p>
                    </div>
                    <div className="col-6">
                    
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeJumbo;