import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import "./landing.css";
import { NavLink } from "react-router-dom";
import bg from "../../img/bg.gif";
import { getJWT } from "../../utils/helpers";
import AuthLanding from "./AuthLanding";

class Landing extends Component {
  render() {
    let auth = getJWT();
    let { profile } = this.props;
    return (
      <div id={!auth ? "landing" : "auth-landing"}>
        {auth && profile ? (
          <AuthLanding profile={profile} />
        ) : (
          <Fragment>
            <img src={bg} alt="bg" />
            <div className="overlay">
              <div className="text">
                <h1>ChaTTer</h1>
                <div>Connet easily</div>
                <NavLink
                  to={auth ? "/pay/" : "/register"}
                  className="border btn text-white mt-3"
                >
                  {auth ? "pay" : "Sign Up for Free"}
                </NavLink>
                <div className="d-block d-lg-none">
                  <NavLink className="btn border mt-3 text-white" to="/login">
                    Login
                  </NavLink>
                </div>
              </div>
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}
const mapStateToProps = state => ({ profile: state.getProfileReducer });
export default connect(
  mapStateToProps,
  actions
)(Landing);
