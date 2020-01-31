import React from "react";
import Dashboard from "./pages/Dashboard";
import Funtivity from "./pages/Funtivity"
import Calendar from "./pages/Calendar";
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <Route exact path="/dashboard">
        <Dashboard/>
        </Route>
        <Route exact path="/funtivity"><Funtivity/></Route>
        <Route exact path="/calendar"><Calendar/></Route>

      </div>
    </Router>
  );
}

export default App;
