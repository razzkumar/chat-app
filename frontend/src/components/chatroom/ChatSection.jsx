import React, { Component } from "react";
import Message from "./Message";
import Chat from "./Chat";
import socketIOClient from "socket.io-client";
import constants from "../../utils/constants";

const C = constants();

class ChatSection extends Component {
  state = {
    socket: "",
    messages: []
  };
  componentDidMount = () => {
    let { profile, chatroomid } = this.props;
    const { userName, id } = profile && profile;
    if (profile) {
      const socket = socketIOClient(C.chatroomhost, {
        query: `username=${userName}&uid=${id}&chatroom=${chatroomid}`
      });
      socket.on("message", data => {
        let { messages } = this.state;
        messages = [...messages, data];
        this.setState({ messages });
      });

      // socket.on("updateUsersList", data => {
      //   this.props.getUsers(data);
      // });
      this.setState({ socket });
    }
  };

  render() {
    let { profile, chatroomid, oldMessages } = this.props;
    const { socket, messages } = this.state;
    oldMessages = oldMessages && messages && [...oldMessages, ...messages];
    return (
      <div className="col-sm-9">
        {oldMessages && (
          <Message message={oldMessages} you={profile && profile.userName} />
        )}
        <Chat socket={socket} profile={profile} id={chatroomid} />
      </div>
    );
  }
}
export default ChatSection;
