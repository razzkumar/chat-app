import React, { Component, Fragment } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { getJWT, toCapitalize } from "../../utils/helpers";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import "./nav.css";
class Nav extends Component {
  componentDidMount = () => {
    const { profile } = this.props;
    let auth = getJWT();
    auth && !profile && this.props.getProfile();
  };

  logout = () => {
    localStorage.removeItem("chatter-auth");
    this.props.history.push("/");
    window.location.reload();
  };

  dispayProfile = () => {
    let profileContainer = document.querySelector(".profile");
    let ls = profileContainer.classList;
    ls.toggle("d-none");
  };

  render() {
    const authToken = getJWT();
    const { profile } = this.props;
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            ChaTTer
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav d-none d-sm-block d-md-none">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/">
                  login
                </NavLink>
              </li>
            </ul>
          </div>
          {authToken ? (
            <Fragment>
              {/* <NavLink
                className="pl-3 pr-3"
                to="/chat"
                id="send"
                data-toggle={profile && profile.credits === 0 ? "modal" : ""}
                data-target={profile && profile.credits === 0 ? "#myModal" : ""}
              >
                Begin Chat
              </NavLink> */}
              <NavLink className="float-right pl-3 pr-3" to="/add-friend">
                Add Friend
              </NavLink>
              <NavLink className="float-right pl-3 pr-3" to="/create-chatroom">
                Create Chatroom
              </NavLink>
              {profile && (
                <div className="profile-container">
                  <div className="profile d-none">
                    <div>
                      <NavLink to="/profile-edit" onClick={this.dispayProfile}>
                        Edit Profile
                      </NavLink>
                    </div>
                    <div>
                      Name:{" "}
                      {profile && profile.name && toCapitalize(profile.name)}
                    </div>
                    <div>User Name: {profile && profile.userName}</div>
                    <div onClick={this.logout}>Logout</div>
                  </div>
                </div>
              )}
              <span
                className="d-none d-lg-block m-1 p-1 text-white"
                onClick={this.dispayProfile}
              >
                profile
              </span>
            </Fragment>
          ) : (
            <Fragment>
              <NavLink className="float-right d-none d-lg-block" to="/register">
                Register
              </NavLink>

              <NavLink
                className="float-right d-none d-lg-block ml-3"
                to="/login"
              >
                Login
              </NavLink>
            </Fragment>
          )}
        </div>
      </nav>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer
});

export default connect(
  mapStateToProps,
  actions
)(withRouter(Nav));
