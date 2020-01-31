import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import LoginForm from "../components/LoginForm";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Card from "../components/Card";
// import Footer from "../components/Footer"



class Landingpage extends Component {

  render() {
    return (
        <Wrapper>
          <Nav />
            <LoginForm />
        </Wrapper>
        
    );
  }
}

export default Landingpage;