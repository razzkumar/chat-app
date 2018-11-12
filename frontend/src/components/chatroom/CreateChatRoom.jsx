import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../reduxStore/actions";
import "./chat.css";
class CreateChatRoom extends Component {
  state = {
    chatroom: ""
  };
  submitHandler = () => {
    const { profile, createChatRoom, history } = this.props;
    const { chatroom } = this.state;
    if (chatroom && profile) {
      let data = {
        chatroom,
        createdBy: profile.id
      };
      createChatRoom(data, history);
    }
  };

  changeHandler = ({ target: { value } }) => {
    this.setState({ chatroom: value });
  };

  errorHandle = () => {
    console.log("ERRor");
  };

  render() {
    let { chatroom } = this.state;
    let err = this.props.match.params && this.props.match.params.error;
    return (
      <div className="container mt-5">
        <div className="row">
          <div
            className="jumbotron col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4"
            style={{ background: "#fcb4b8" }}
          >
            {chatroom && chatroom.length < 5 && (
              <span className="chat-warning">Name should be 5 char long</span>
            )}
            {err && err === "error-chat-room-exist" && (
              <span className="chat-warning">Chatroom Already exist</span>
            )}
            {err && err === "error" && (
              <span className="chat-warning">
                Error occure while creating chatroom <br /> Please Try again
              </span>
            )}
            <form onSubmit={e => e.preventDefault()}>
              <label htmlFor="chatroom">Create Chatroom</label>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="chatroom"
                  name="chatroom"
                  value={chatroom}
                  placeholder="Enter Name of Chatroom"
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <button
                type="submit"
                onClick={
                  chatroom.length >= 5 ? this.submitHandler : this.errorHandler
                }
                className="btn pull-right  mt-3"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  profile: state.getProfileReducer
});

export default connect(
  mapStateToProps,
  actions
)(CreateChatRoom);
