import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../reduxStore/actions";
import "./landing.css";
import constants from "../utils/constants";
import socketIOClient from "socket.io-client";
const C = constants();
class Landing extends Component {
  componentDidMount = () => {
    const socket = socketIOClient(C.host);
    socket.on("news", function(data) {
      console.log(data);
    });
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
