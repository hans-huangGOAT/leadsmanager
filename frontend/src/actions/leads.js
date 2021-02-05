import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";
import { createMessage, returnErrors } from "./messages";
import { tokenConfig } from "./auth";

//GET LEADS
export const getLeads = () => (dispatch, getState) => {
  fetch("http://127.0.0.1:8000/api/leads/", {
    headers: tokenConfig(getState).headers,
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
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes
        .json()
        .then((errMessage) =>
          dispatch(returnErrors(errMessage, errRes.status))
        );
    });
};

//DELETE LEAD
export const deleteLead = (id) => (dispatch, getState) => {
  console.log("DELETE ITEM");
  fetch(`http://127.0.0.1:8000/api/leads/${id}/`, {
    method: "DELETE",
    headers: tokenConfig(getState).headers,
  })
    .then((res) => {
      dispatch(createMessage({ deleteLead: "Lead Deleted" }));
      dispatch({
        type: DELETE_LEAD,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD LEAD
export const addLead = (lead) => (dispatch, getState) => {
  fetch("http://127.0.0.1:8000/api/leads/", {
    method: "POST",
    headers: tokenConfig(getState).headers,
    body: JSON.stringify(lead),
  })
    .then((res) => {
      if (res.ok) {
        console.log("#");
        return res.json();
      } else {
        console.log("*");
        throw res;
      }
    })
    .then((data) => {
      dispatch(createMessage({ addLead: "Lead Added" }));
      dispatch({
        type: ADD_LEAD,
        payload: data,
      });
    })
    .catch((errRes) => {
      errRes
        .json()
        .then((errMessage) =>
          dispatch(returnErrors(errMessage, errRes.status))
        );
    });
};
