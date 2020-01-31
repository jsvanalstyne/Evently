import React from "react";
import Dashboard from "./pages/Dashboard";
import Funtivity from "./pages/Funtivity"
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
        <Route exact path="/funtivity"><Funtivity/></Route>
      </div>
    </Router>
  );
}

export default App;
