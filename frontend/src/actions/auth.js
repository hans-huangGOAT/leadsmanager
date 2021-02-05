import { returnErrors } from "./messages";

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from "./types";

// CHECK TOKEN && LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER loading
  dispatch({
    type: USER_LOADING,
  });

  // request
  fetch("http://127.0.0.1:8000/api/auth/user", tokenConfig(getState))
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: USER_LOADED,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((errMessage) => {
        dispatch(returnErrors(errMessage, errRes.status));
        dispatch({
          type: AUTH_ERROR,
        });
      });
    });
};

// LOGIN USER
export const login = (username, password) => (dispatch) => {
  // request
  fetch("http://127.0.0.1:8000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((errMessage) => {
        dispatch(returnErrors(errMessage, errRes.status));
        dispatch({
          type: LOGIN_FAIL,
        });
      });
    });
};

// REGISTER USER
export const register = ({ username, email, password }) => (dispatch) => {
  // request
  fetch("http://127.0.0.1:8000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw res;
      }
    })
    .then((data) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes.json().then((errMessage) => {
        dispatch(returnErrors(errMessage, errRes.status));
        dispatch({
          type: REGISTER_FAIL,
        });
      });
    });
};

// LOGOUT USER
export const logout = () => (dispatch, getState) => {
  // request
  fetch("http://127.0.0.1:8000/api/auth/logout", {
    method: "POST",
    headers: tokenConfig(getState).headers,
  }).then((res) => {
    dispatch({
      type: LOGOUT_SUCCESS,
    });
  });
};

// Setup config with token -helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // if token, add to headers
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }

  return config;
};
