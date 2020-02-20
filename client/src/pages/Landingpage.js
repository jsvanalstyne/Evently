import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import HomeJumbo from "../components/HomeJumbo"
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Card from "../components/Card";
import Footer from "../components/Footer"



class Landingpage extends Component {

  render() {
    return (
        <Wrapper>
          <Nav />
            <HomeJumbo 
              mainText="Welcome!"
              smallText="All of your events, together in one place."
            />
            <Footer></Footer>
        </Wrapper>
        
    );
  }
}

export default Landingpage;