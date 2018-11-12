import React, { Component } from "react";
import { connect } from "react-redux";

class Chat extends Component {
  state = {
    message: ""
  };

  sendMessage = ({ key }) => {
    const { socket, profile } = this.props;
    const { message } = this.state;
    const data = {
      username: profile.userName,
      uid: profile.id,
      message
    };
    if (key === "Enter") {
      socket.emit("message", data);
      this.setState({ message: "" });
    }
  };

  onChange = ({ target: { value } }) => {
    this.setState({ message: value });
  };

  render() {
    const { message } = this.state;
    return (
      <form className="chat-text-input" onSubmit={e => e.preventDefault()}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            id="chat"
            name="message"
            value={message}
            onChange={this.onChange}
            onKeyUp={this.sendMessage}
            aria-describedby="chat-text"
            placeholder="Enter text to chat"
          />
        </div>
      </form>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  state
});

export default connect(
  mapStateToProps,
  null
)(Chat);
