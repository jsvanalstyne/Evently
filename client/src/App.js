import React from "react";
import Dashboard from "./pages/Dashboard";
import Landingpage from "./pages/Landingpage";
import Features from "./pages/Features"
import Funtivity from "./pages/Funtivity"
import Calendar from "./pages/Calendar";
import SignUpForm from "./components/SignUpForm"
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
      <Route exact path="/features">
        <Features />
      </Route>
      <Route exact path="/funtivity">
        <Funtivity/>
      </Route>
  
      </div>
    </Router>
  );
}

export default App;
