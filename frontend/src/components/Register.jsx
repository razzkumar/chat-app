import React, { Component } from "react";
import * as actions from "../reduxStore/actions";
import { connect } from "react-redux";

class Register extends Component {
  state = {
    password: "",
    cpassword: "",
    isPasswordMatched: true
  };
  handleSubmit = e => {
    //   const form = document.querySelector("#register");
    const form = document.getElementById("register");
    let formData = new FormData(form);
    // const formData = { name: "name raj" };

    this.props.signUp(formData);
  };
  onPasswordChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value });
  };

  verifyPassword = ({ target: { value, name } }) => {
    if (value === this.state.password) {
      this.setState({ [name]: value, isPasswordMatched: true });
    } else {
      this.setState({ [name]: value, isPasswordMatched: false });
    }
  };

  render() {
    const { password, cpassword, isPasswordMatched } = this.state;
    const {
      params: { error }
    } = this.props.match;
    return (
      <div className="container">
        <div className="jumbotron mt-5">
          {error && (
            <div
              className="alert-danger p-2 text-center"
              style={{ marginTop: "-50px", marginBottom: "20px" }}
            >
              <strong>Failed !! </strong> to create account <br />
              <strong> Please try again !!!</strong>
            </div>
          )}
          <form
            onSubmit={e => e.preventDefault()}
            id="register"
            encType="multipart/form-data"
            name="register"
          >
            <div className="title">
              <h1>Registration Form</h1>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="email"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="userName">User Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="User Name"
                  name="userName"
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onPasswordChange}
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="cpassword"> Conform Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="cpassword"
                  value={cpassword}
                  name="cpassword"
                  onChange={this.verifyPassword}
                  aria-describedby="pass"
                  placeholder="Conform Password"
                  required
                />
                {!isPasswordMatched && (
                  <small id="pass" className="form-text text-danger">
                    Password not Mathched
                  </small>
                )}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                className="form-control"
                id="address"
                name="address"
                placeholder="Kathmandu"
                required
              />
            </div>
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="btn "
              disabled={isPasswordMatched ? false : true}
            >
              Register
            </button>
            <button type="reset" className="btn  ml-4">
              Reset
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(Register);
