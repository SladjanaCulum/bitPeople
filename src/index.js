import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../src/components/About/About";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
