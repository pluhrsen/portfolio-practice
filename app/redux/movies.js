import axios from "axios";

const SET_MOVIES = "SET_MOVIES";
// const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';
// const REMOVE_CAMPUS = 'REMOVE_CAMPUS';
// const UPDATE_CAMPUS = 'UPDATE_CAMPUS';

export const setMovies = movies => {
  return { type: SET_MOVIES, movies };
};

export const fetchMovies = () => {
  return async dispatch => {
    const response = await axios.get("/api/movie-ranker");
    const action = setFranchises(response.data);
    dispatch(action);
  };
};

const franchiseReducer = (state = [], action) => {
  switch (action.type) {
    case SET_FRANCHISES:
      return action.franchises;
    // case GET_NEW_CAMPUS:
    //   return [...state, action.campus]
    // case REMOVE_CAMPUS:
    //   return state.filter(campus => campus.id !== action.campus.id)
    // case UPDATE_CAMPUS:
    //   return [...state.filter(campus => campus.id !== action.campus.id), action.campus]
    default:
      return state;
  }
};

export default franchiseReducer;
