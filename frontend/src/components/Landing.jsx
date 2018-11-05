import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../reduxStore/actions";
import "./landing.css";
import socketIOClient from "socket.io-client";

class Landing extends Component {
  state = {
    endpoint: "http://localhost:4000",
    color: "white"
  };
  setColor = color => {
    this.setState({ color });
  };
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit("chage", this.state.color);
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    socket.on("chage", color => {
      console.log("object", color);
      document.body.style.backgroundColor = color;
    });

    return (
      <div style={{ textAlign: "center" }}>
        <div id="landing">Landing</div>
        <button onClick={this.send}>Change Color</button>
        <button id="blue" onClick={() => this.setColor("blue")}>
          Blue
        </button>
        <button id="red" onClick={() => this.setColor("red")}>
          Red
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
export default connect(
  mapStateToProps,
  actions
)(Landing);
