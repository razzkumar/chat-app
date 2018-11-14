import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
// import ChatroomList from "./ChatroomList";
import HomeChat from "./HomeChat";

class AuthLanding extends Component {
  componentDidMount = () => {
    // this.props.getChatrooms();
  };

  render() {
    // const { chatrooms } = this.props;

    return (
      <div className="container">
        <div className="row">
          {/* <div className="col-sm-2">
            {chatrooms && <ChatroomList chatrooms={chatrooms && chatrooms} />}
          </div> */}
          <div className="col-sm-12">
            <HomeChat />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer
});

// chatrooms: state.getChatrooms
export default connect(
  mapStateToProps,
  actions
)(AuthLanding);
