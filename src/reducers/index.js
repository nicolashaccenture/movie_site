import {combineReducers} from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import { postsBySubreddit, selectedSubreddit} from './movieReducers.js';
import { musicByAlbum } from './musicReducer.js';



const rootReducer = combineReducers({
  firebase: firebaseStateReducer,
  postsBySubreddit,
  selectedSubreddit,
  musicByAlbum
});

export default rootReducer;
