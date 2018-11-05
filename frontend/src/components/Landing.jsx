import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../reduxStore/actions";
import "./landing.css";

import socketIOClient from "socket.io-client";

class Landing extends Component {
  componentDidMount = () => {
    const socket = socketIOClient("http://localhost:4000");
  };

  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <div id="landing">Landing</div>
      </div>
    );
  }
}
const mapStateToProps = state => ({ state });
export default connect(
  mapStateToProps,
  actions
)(Landing);
