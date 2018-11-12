import React, { Component } from "react";
import socketIOClient from "socket.io-client";
import { connect } from "react-redux";

import constants from "../../utils/constants";
import User from "./User";
import Message from "./Message";
import Chat from "./Chat";
import * as actions from "../../reduxStore/actions";
const C = constants();
class AuthLanding extends Component {
  state = {
    socket: "",
    messages: []
  };

  componentDidMount = () => {
    let { profile } = this.props;
    const { userName, id } = profile && profile;
    if (profile) {
      const socket = socketIOClient(C.host, {
        query: "username=" + userName + "&uid=" + id
      });
      socket.on("message", data => {
        let { messages } = this.state;
        messages = [...messages, data];
        this.setState({ messages });
      });

      socket.on("updateUsersList", data => {
        this.props.getUsers(data);
      });

      this.setState({ socket });
    }
  };

  render() {
    let { profile, users } = this.props;
    const { socket, messages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4 chat-container">
          <div className="col-sm-3">
            <User user={users} you={profile && profile.userName} />
          </div>
          <div className="col-sm-9">
            <Message message={messages} user={profile && profile.userName} />
            <Chat socket={socket} profile={profile} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer,
  users: state.getUsers
});

export default connect(
  mapStateToProps,
  actions
)(AuthLanding);
