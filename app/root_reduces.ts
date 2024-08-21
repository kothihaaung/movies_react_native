import { combineReducers } from 'redux';
import moviesReducer from './features/movies/movies_reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  // other reducers can go here
});

export default rootReducer;
