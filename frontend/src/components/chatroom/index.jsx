import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import User from "./User";
import ChatSection from "./ChatSection";
class Chatroom extends Component {
  componentDidMount = () => {
    let chatroomid = this.props.match.params && this.props.match.params.id;
    this.props.getChatroomMember(chatroomid);
    this.props.getChatroomMessages(chatroomid);
  };

  render() {
    let chatroomid = this.props.match.params && this.props.match.params.id;
    let { profile, members, messages } = this.props;
    return (
      <div className="container">
        <div className="row mt-4 chat-container">
          <div className="col-sm-3">
            <User user={members} you={profile && profile.userName} />
          </div>
          {profile && members && chatroomid && (
            <ChatSection
              profile={profile}
              oldMessages={messages}
              members={members}
              chatroomid={chatroomid}
            />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer,
  members: state.getMembers,
  messages: state.getMessage
});

export default connect(
  mapStateToProps,
  actions
)(Chatroom);
