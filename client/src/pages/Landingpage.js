import React, { Component } from "react";
import Nav from "../components/Nav";
import Wrapper from "../components/Wrapper";
import LoginForm from "../components/LoginForm";
import { withAuth } from "@okta/okta-react"
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import Card from "../components/Card";
// import Footer from "../components/Footer"



export default withAuth(class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = { authenticated: null };

    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  handleLogout = () => {
    this.props.auth.logout();
  }

  render() {
    return (
        <Wrapper>
          <Nav 
           handleLogout={this.handleLogout}
          />
          <LoginForm />
        </Wrapper>
        
    );
  }
});