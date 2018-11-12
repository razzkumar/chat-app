import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import "./landing.css";
import { getJWT } from "../../utils/helpers";
import HomeChat from "./HomeChat";

class Landing extends Component {
  render() {
    let auth = getJWT();
    let { profile } = this.props;
    return (
      <div id={!auth ? "landing" : "auth-landing"}>
        {auth && profile && <HomeChat profile={profile} />}
      </div>
    );
  }
}
const mapStateToProps = state => ({ profile: state.getProfileReducer });
export default connect(
  mapStateToProps,
  actions
)(Landing);
