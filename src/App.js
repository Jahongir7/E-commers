import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import AllComponents from "./AllComponents";
import Routes from "./Router/Route";
function App() {
  return (
    <Router>
      <Route exact path="/" component={AllComponents} />
      <Route component={Routes} />
    </Router>
  );
}

export default App;
