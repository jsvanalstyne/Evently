import React from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage"
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/">
        <Landingpage />
      </Route>
      <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
      </div>
    </Router>
  );
}

export default App;
