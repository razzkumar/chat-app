import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../reduxStore/actions";
import "./landing.css";
class Landing extends Component {
  render() {
    console.log("this.props", this.props);
    return (
      <div>
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
