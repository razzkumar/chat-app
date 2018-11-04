import axios from "axios";
import { GET_PROFILE } from "../constants";
import { authHeader } from "../../utils/helpers";

// ===========LOGIN===========
export const logIn = (data, history) => async dispatch => {
  try {
    const user = await axios.post("/api/v1/users/login", data);
    if (user && user.data && user.data.token) {
      history.push("/");
      localStorage.setItem("onpay-jwt", user.data.token);
      window.location.reload();
    } else {
      localStorage.removeItem("onpay-jwt");
      history.push("/login/error");
    }
  } catch (e) {
    if (e) {
      localStorage.removeItem("onpay-jwt");
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
    localStorage.removeItem("onpay-jwt");
    window.location.reload();
  }
};
