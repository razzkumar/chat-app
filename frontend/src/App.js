import React, { Component, Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Landing from "./components/Landing";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route exact path="/login/:error?" component={Login} />
          <Route exact path="/register/:error?" component={Register} />
          <Route exact path="/" component={Landing} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
