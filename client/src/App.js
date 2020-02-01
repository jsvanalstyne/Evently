import React from "react";
import Dashboard from "./pages/Dashboard";
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
