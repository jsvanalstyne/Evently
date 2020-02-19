import React from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import Features from "./pages/Features"
import Funtivity from "./pages/Funtivity"
import Payment from "./pages/Payment"
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Login from "./components/auth/Login";
import Account from "./pages/Account"
import Messaging from "./pages/Messaging.js";

function onAuthRequired({history}) {
  history.push("/login")
}


function App() {
  return (
    <Router>
      <Security 
        issuer="https://dev-844753.okta.com/oauth2/default"
        clientId="0oa19phl3wEn9R1iI4x6"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        response_type="id_token"
      >
        <Route exact path="/" component={Landingpage}/>
        <SecureRoute exact path="/dashboard" component={Dashboard}/>
        <SecureRoute exact path="/account" component={Account}/>
        <Route exact path="/features" component={Features}/>
        <SecureRoute exact path="/funtivity" component={Funtivity}/>
        <Route path="/implicit/callback" component={ImplicitCallback}/>
        <Route path="/login" render={() => <Login baseUrl="https://dev-844753.okta.com"/>}/>
        <SecureRoute path="/pay" component={Payment}/>
        <SecureRoute path="/messaging" component={Messaging}/>
      </Security>
    </Router>
  );
}

export default App;
