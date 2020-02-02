import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import FeaturesJumbo from "../components/FeaturesJumbo";
import FeaturesCardGroup from "../components/FeaturesCardGroup"
import Container from "../components/Container";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Card from "../components/Card";
// import Footer from "../components/Footer"



class Features extends Component {

  render() {
    return (
      <Wrapper>
        <Nav />
        <FeaturesJumbo
          mainText="All of your events, togther in one place"
          smallText="We make life easier for club and league commissioners, administrators, coaches and volunteers. And we do it by bringing everything into one integrated solution. From setting up registration or invoicing to getting the word out about your club or last-minute field changes, we get you up and running fast, put you in control and help you do it all. What can we say, we’re the complete package"
          buttontext="Contact us"
        />
        <Container>
          <FeaturesCardGroup />
        </Container>
      </Wrapper>
    );
  }
}

export default Features;