import axios from "axios";
import {
  GET_PROFILE,
  GET_CONNECTED_USER,
  GET_CHAT_ROOM,
  GET_CHAT_ROOM_MEMBER
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

// =============CREATE CHAT-ROOM=============

export const createChatRoom = (data, history) => async dispatch => {
  try {
    const chatroom = await axios.post(
      "/api/v1/chat/create-chatroom",
      data,
      authHeader
    );
    if (chatroom && chatroom.data && chatroom.data.chatroom) {
      console.log("chatroom", chatroom.data);
      history.push(`/chatroom/${chatroom.data.id}`);
    } else if (chatroom && chatroom.data.message) {
      history.push("/create-chatroom/error-chat-room-exist");
    } else {
      history.push("/create-chatroom/error");
    }
  } catch (e) {
    if (e) {
      history.push("/create-chatroom/error");
    }
  }
};

// ===========GET--CHATROOM================

export const getChatrooms = () => async dispatch => {
  try {
    const chatrooms = await axios.get("/api/v1/chat/chatrooms", authHeader);
    let disp = { type: GET_CHAT_ROOM, payload: chatrooms.data };
    chatrooms && chatrooms.data && dispatch(disp);
  } catch (err) {
    console.log("ERROR", err);
  }
};
export const getChatroomMember = id => async dispatch => {
  try {
    const members = await axios.get(`/api/v1/chat/members/${id}`, authHeader);
    if (members) {
      let disp = { type: GET_CHAT_ROOM_MEMBER, payload: members.data };
      members && members.data && dispatch(disp);
    } else {
      console.log("ERROR ");
    }
  } catch (err) {
    console.log("ERROR", err);
  }
};
