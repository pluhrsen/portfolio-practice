import axios from "axios";

const SET_SINGLE_FRANCHISE = "SET_SINGLE_FRANCHISE";

export const setSingleFranchise = movies => {
  return { type: SET_SINGLE_FRANCHISE, movies };
};

export const fetchSingleFranchise = franchiseId => {
  return async dispatch => {
    const response = await axios.get(`/api/movie-ranker/${franchiseId}`);
    const action = setSingleFranchise(response.data);
    dispatch(action);
  };
};

const singleFranchiseReducer = (state = [], action) => {
  switch (action.type) {
    case SET_SINGLE_FRANCHISE:
      return action.movies;
    default:
      return state;
  }
};

export default singleFranchiseReducer;
