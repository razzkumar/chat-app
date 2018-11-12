import React, { Component, Fragment } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Login from "./components/common/Login";
import Register from "./components/common/Register";
import Landing from "./components/Landing";
import Nav from "./components/common/Nav";
import AddFriend from "./components/AddFrined";
import PrivateRoute from "./components/common/PrivateRoute";
import CreateChatRoom from "./components/chatroom/CreateChatRoom";
import Chatroom from "./components/chatroom";
import Home from "./components/Landing/Home";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <Switch>
          <Route exact path="/login/:error?" component={Login} />
          <Route exact path="/register/:error?" component={Register} />
          <Route exact path="/" component={Landing} />
          <PrivateRoute exact path="/add-friend" component={AddFriend} />
          <PrivateRoute
            exact
            path="/create-chatroom/:error?"
            component={CreateChatRoom}
          />
          <PrivateRoute exact path="/chatroom/:id" component={Chatroom} />
          <PrivateRoute exact path="/home" component={Home} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
