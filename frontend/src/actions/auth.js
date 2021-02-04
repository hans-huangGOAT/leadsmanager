import { returnErrors } from "./messages";

import { USER_LOADED, USER_LOADING, AUTH_ERROR } from "./types";

// CHECK TOKEN && LOAD USER
export const loadUser = () => (dispatch, getState) => {
  // USER loading
  dispatch({
    type: USER_LOADING,
  });

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

  // request
  fetch("http://127.0.0.1:8000/api/auth/user", config)
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
