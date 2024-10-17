import { combineReducers } from "redux";

const initialState = {
  popularMovies: [],
  topRatedMovies: [],
  upcomingMovies: [],
  movieDetail: {},
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POPULAR_MOVIES":
      return { ...state, popularMovies: action.payload };
    case "SET_TOP_RATED_MOVIES":
      return { ...state, topRatedMovies: action.payload };
    case "SET_UPCOMING_MOVIES":
      return { ...state, upcomingMovies: action.payload };
    case "SET_MOVIE_DETAIL":
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  movie: movieReducer,
});
