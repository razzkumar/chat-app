import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import constants from "../../utils/constants";
const C = constants();
export default class AuthLanding extends Component {
  componentDidMount = () => {
    const socket = socketIOClient(C.host);
    socket.on("news", function(data) {
      console.log(data);
    });
  };

  render() {
    return <h1>Hello</h1>;
  }
}
