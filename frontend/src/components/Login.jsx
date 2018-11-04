import React, { Component } from "react";
import * as actions from "../reduxStore/actions";
import { connect } from "react-redux";
import { getJWT } from "../utils/helpers";
import { withRouter } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  changeHandler = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  submitHandler = () => {
    const { email, password } = this.state;
    this.props.logIn({ email, password }, this.props.history);
    this.setState({ email: "", password: "" });
  };

  componentDidMount() {
    if (getJWT()) {
      this.props.history.push("/");
    }
    let error = this.props.match.params.error;
    if (error) {
      this.setState({ email: "", password: "" });
    }
  }

  render() {
    let error = this.props.match.params.error;
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="jumbotron col-sm-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
            {error && (
              <div className="alert-danger">
                Email or password not matched!!
              </div>
            )}
            <form onSubmit={e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.changeHandler}
                  required
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="rememberCheckBox"
                  name="remember"
                />
                <label className="form-check-label" htmlFor="rememberCheckBox">
                  Remember me
                </label>
              </div>
              <button
                type="submit"
                onClick={this.submitHandler}
                className="btn  mt-3"
              >
                Submit
              </button>
              <button type="reset" className="btn ml-3 mt-3">
                Reset
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(withRouter(Login));
