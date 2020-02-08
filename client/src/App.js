import React from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import Features from "./pages/Features"
import Funtivity from "./pages/Funtivity"
<<<<<<< HEAD
=======

import Payment from "./pages/Payment"
// import Calendar from "./pages/Calendar";
import SignUpForm from "./components/SignUpForm"
>>>>>>> 1459d2eb8705e1ddc6ec000844f25c126366cb2e
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react'
import Login from "./components/auth/Login";

function onAuthRequired({history}) {
  history.push("/login")
}


function App() {
  return (
    <Router>
<<<<<<< HEAD
      <Security 
        issuer="https://dev-844753.okta.com/oauth2/default"
        clientId="0oa19phl3wEn9R1iI4x6"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        response_type="id_token"
        // pkce={true}
      >
        <Route exact path="/" component={Landingpage}/>
        <SecureRoute exact path="/dashboard" component={Dashboard}/>
        <Route exact path="/features" component={Features}/>
        <SecureRoute exact path="/funtivity" component={Funtivity}/>
        <Route path="/implicit/callback" component={ImplicitCallback}/>
        <Route path="/login" render={() => <Login baseUrl="https://dev-844753.okta.com"/>}/>
      </Security>
=======
      <div>
      <Route exact path="/">
        <Landingpage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
      </Route>
      <Route exact path="/features">
        <Features />
      </Route>
      <Route exact path="/funtivity">
        <Funtivity/>
      </Route>

      <Route exact path="/pay">
        <Payment/>
      </Route>
  
      </div>
>>>>>>> 1459d2eb8705e1ddc6ec000844f25c126366cb2e
    </Router>
  );
}

export default App;
