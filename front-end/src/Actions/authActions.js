import axios from "axios";
import { GET_ERRORS, SET_CURRENT_USER, USER_LOADING } from "./types";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { useHistory, Redirect } from "react-router-dom";
import React, { Component } from "react";
// import { reSend } from "../../../BackEnd/Users/user.controller";

export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post("/api/register", userData)
    .then((res) => {
      localStorage.setItem("UserRegisterSuccess", userData.username);
      localStorage.setItem("emailRegisterSuccess", userData.email);
      history.push("/verify");
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const loginUser = (userData) => (dispatch) => {
  axios
    .post("/api/login", userData)
    .then((res) => {
      // state = { username: res.data.username, jwt: res.data.token };
      // console.log("name: " + this.state.username);
      // Save to localStorage
      // Set token to localStorage
      if (res.data.idverify == false) {
        return res.status(300).send({ mess: "account id not verify" });
      } else {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        localStorage.setItem("username", res.data.username);
        // Set token to Auth header
        setAuthToken(token);
        // Decode token to get user data
        const decoded = jwt_decode(token);
        // Set current user
        dispatch(setCurrentUser(decoded));
      }
    })
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};
// export const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem("username"));
// };
export const setCurrentUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
export const setUserLoading = () => {
  return {
    type: USER_LOADING,
  };
};
// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  // const history = useHistory();
  localStorage.removeItem("jwtToken");
  localStorage.removeItem("username");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // history.push("/login");
  window.location.href = "./login";
};
export const verifyEmail = (data, history) => (dispatch) => {
  axios
    .post("/api/verify", data)
    .then((res) => {
      localStorage.removeItem("emailRegisterSuccess");
      localStorage.removeItem("UserRegisterSuccess");
      history.push("/login");
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const reSend = (data) => (dispatch) => {
  axios
    .post("/api/resend", data)
    .then((res) => {
      console.log("reSend code to email");
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
export const forgotPassword = (data) => (dispatch) => {
  axios
    .post("/api/forgotpassword", data)
    .then((res) => {
      // res.status;
      localStorage.setItem("messsuccess", res.status);
    })
    .catch((err) => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
