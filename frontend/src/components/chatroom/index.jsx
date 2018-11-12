import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import User from "./User";
import Message from "./Message";
class AuthLanding extends Component {
  componentDidMount = () => {
    let id = this.props.match.params && this.props.match.params.id;
    this.props.getChatroomMember(id);
  };

  render() {
    let { profile, members } = this.props;
    console.log("Memebtssss====", members);
    return (
      <div className="container">
        <div className="row mt-4 chat-container">
          <div className="col-sm-3">
            <User user={members} you={profile && profile.userName} />
          </div>
          <div className="col-sm-9">
            <Message user={profile && profile.userName} />
            {/* <Chat socket={socket} profile={profile} /> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer,
  members: state.getChatroomsMembers
});

export default connect(
  mapStateToProps,
  actions
)(AuthLanding);
