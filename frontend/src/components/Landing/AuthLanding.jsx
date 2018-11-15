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
    messages: [],
    members: []
  };

  componentDidMount = () => {
    this.props.getMembers();
    this.props.getMessages();
    let { profile } = this.props;
    const { userName, id } = profile && profile;
    if (profile) {
      const socket = socketIOClient(C.host, {
        query: "username=" + userName + "&uid=" + id
      });
      socket.on("message", data => {
        let { messages } = this.state;
        messages = [...messages, data];
        this.scrollToBottom();
        this.setState({ messages });
      });

      socket.on("updateUsersList", data => {
        this.props.getUsers(data);
      });

      this.setState({ socket });
    }
  };

  scrollToBottom() {
    let messages = document.getElementsByClassName("chat-container")[0];

    messages.scrollTop = messages.scrollHeight - messages.clientHeight;
    console.log(
      "YEBA",
      messages.scrollHeight,
      messages.clientHeight,
      messages.scrollTop
    );
  }
  render() {
    let { profile, users, allUser, allMessage } = this.props;
    console.log("al", allUser);
    const { socket, messages } = this.state;
    return (
      <div className="container">
        <div className="row mt-4">
          <div className="col-sm-3">
            {allUser && (
              <User
                user={users}
                you={profile && profile.userName}
                allUser={allUser}
              />
            )}
          </div>

          <div className="col-sm-9">
            <div className="chat-container">
              {allMessage && (
                <Message
                  message={messages}
                  allMessage={allMessage}
                  user={profile && profile.userName}
                />
              )}
            </div>
            <Chat socket={socket} profile={profile} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer,
  users: state.getUsers,
  allUser: state.getMembers,
  allMessage: state.getMessage
});

export default connect(
  mapStateToProps,
  actions
)(AuthLanding);
