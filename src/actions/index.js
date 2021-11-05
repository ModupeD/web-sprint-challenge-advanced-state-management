import axios from "axios";

export const LOADING_START = "LOADING_START";
export const LOADING_SUCCESS = "LOADING_SUCCESS";
export const LOADING_FAILURE = "LOADING_FAILURE";
export const UPDATE_NAME = "UPDATE_NAME";
export const ADD_SMURF = "ADD_SMURF";
export const ERROR = "ERROR";

const updateName = (dispatch) => {
  dispatch({ type: UPDATE_NAME, payload: updateName });
};

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading
//   status display in our application, performs an axios call to
//   retreive smurfs from our server, saves the result of that call
//   to our state and shows an error if one is made.
export const fetchSmurfs = (dispatch) => {
  dispatch({ type: LOADING_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: LOADING_SUCCESS, payload: res.data }))
    .catch((err) => dispatch({ type: LOADING_FAILURE, payload: err }));
};

//2. Add a standard action that allows us to add new smurf
//   (including the name, nickname, position, summary)
export const addSmurf = (smurf) => {
  return { type: ADD_SMURF, payload: smurf };
};

//3. Add a standard action that allows us to set
//   the value of the error message slice of state.
export const error = (err) => {
  return { type: ERROR, payload: err };
};
