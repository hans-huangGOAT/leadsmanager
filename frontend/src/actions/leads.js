import { GET_LEADS, DELETE_LEAD, ADD_LEAD, GET_ERRORS } from "./types";
import { createMessage } from "./messages";
//GET LEADS
export const getLeads = () => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/leads/")
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: GET_LEADS,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};

//DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
  console.log("DELETE ITEM");
  fetch(`http://127.0.0.1:8000/api/leads/${id}/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
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
export const addLead = (lead) => (dispatch) => {
  fetch("http://127.0.0.1:8000/api/leads/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(lead),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
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
        .then((data) => data)
        .then((errMessage) => {
          const errors = {
            msg: errMessage,
            status: errRes.status,
          };
          dispatch({
            type: GET_ERRORS,
            payload: errors,
          });
        });
    });
};
