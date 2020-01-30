import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Card from "../components/Card";
import Footer from "../components/Footer"



class Dashboard extends Component {

  render() {
    return (
     
      <div className="container">
        <h1 className="text-center dashboard"> Dashboard</h1>
        <Row>
          <Col size="6">
           <Card title="Your upcoming events:"></Card>
           </Col>
           <Col size="6">
           <Card title="Events you may be interested in:"></Card>
          </Col>
        </Row>
       
        <Row>
          <Col size="12">
           <h1>Calendar here</h1>
          </Col>
        </Row>
        <Footer />
      
      </div>
    );
  }
}

export default Dashboard;