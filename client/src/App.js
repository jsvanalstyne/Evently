import React, { Component } from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

function onAuthRequired({history}) {
  history.push('/login');
}


class App extends Component {

  render() {
    return (
      <Router>
        <Security issuer='https://localhost:3000/oauth2/default'
                  clientId='0oa16ghdfjkXoNj7F4x6'
                  redirectUri={window.location.origin + 'authorization-code/callback'}
                  onAuthRequired={onAuthRequired}
                  pkce={true}>
          <Route exact path="/">
            <Landingpage />
          </Route>
          <SecureRoute exact path="/features">
            <Dashboard/>
          </SecureRoute>
        </Security>
        <Route path='/implicit/callback' component={ImplicitCallback} />
      </Router>
    );
  }
}

export default App;

