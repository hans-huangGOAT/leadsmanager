import { GET_LEADS, DELETE_LEAD, ADD_LEAD } from "./types";

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
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: ADD_LEAD,
        payload: data,
      });
    })
    .catch((err) => console.log(err));
};
