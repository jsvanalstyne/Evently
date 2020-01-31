import React from "react";
// import LoginForm from "../LoginForm";
import Container from "../Container"
import "./style.css";

function HomeJumbo(props) {
    return (
        <div class="jumbotron jumbotron-fluid landingJumbo">
            <Container>
                <h1 class="display-4">{props.mainText}</h1>
                <p class="lead">{props.smallText}</p>
            </Container>
        </div>
    )
}

export default HomeJumbo;