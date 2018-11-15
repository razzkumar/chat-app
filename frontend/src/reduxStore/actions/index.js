import axios from "axios";
import {
  GET_PROFILE,
  GET_CONNECTED_USER,
  GET_CHAT_MESSAGE,
  GET_CHAT_MEMBER
} from "../constants";
import { authHeader } from "../../utils/helpers";

// ===========LOGIN===========
export const logIn = (data, history) => async dispatch => {
  try {
    const user = await axios.post("/api/v1/users/login", data);
    if (user && user.data && user.data.token) {
      localStorage.setItem("chatter-auth", user.data.token);
      history.push("/");
      window.location.reload();
    } else {
      localStorage.removeItem("chatter-auth");
      history.push("/login/error");
    }
  } catch (e) {
    if (e) {
      localStorage.removeItem("chatter-auth");
      history.push("/login/error");
    }
  }
};

// ++++++++++++++SIGNUP++++++++++++++

export const signUp = formData => async dispatch => {
  let data = {};
  formData.delete("cpassword");
  for (var value of formData.entries()) {
    data[value[0]] = value[1];
  }
  const user = await axios.post("/api/v1/users/signup", data);
  if (user && user.statusText === "Created") {
    window.history.pushState(null, null, "/login");
    window.location.reload();
  } else {
    window.history.pushState(null, null, "/register/error");
    window.location.reload();
  }
};

// ==========Get Profie===============
export const getProfile = () => async dispatch => {
  try {
    const profile = await axios.get("/api/v1/users/profile", authHeader);
    let disp = { type: GET_PROFILE, payload: profile.data };
    profile && profile.data && dispatch(disp);
  } catch (err) {
    localStorage.removeItem("chatter-auth");
    window.location.reload();
  }
};

export const getUsers = payload => async dispatch => {
  let data = {
    type: GET_CONNECTED_USER,
    payload
  };
  payload && dispatch(data);
};

export const getMembers = () => async dispatch => {
  try {
    const members = await axios.get(`/api/v1/chat/members`, authHeader);
    if (members) {
      let disp = { type: GET_CHAT_MEMBER, payload: members.data };
      members && members.data && dispatch(disp);
    } else {
      console.log("ERROR ");
    }
  } catch (err) {
    console.log("ERROR", err);
  }
};
export const getMessages = () => async dispatch => {
  try {
    const message = await axios.get("/api/v1/chat/messages", authHeader);
    if (message) {
      let disp = { type: GET_CHAT_MESSAGE, payload: message.data };
      message && message.data && dispatch(disp);
    } else {
      console.log("ERROR ");
    }
  } catch (err) {
    console.log("ERROR", err);
  }
};
