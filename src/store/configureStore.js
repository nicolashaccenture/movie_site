import {
  createStore, applyMiddleware, compose
}
from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createLogger from 'redux-logger';

import rootReducer from '../reducers/index';
import {
  reactReduxFirebase
}
from 'react-redux-firebase';

import thunk from 'redux-thunk';

// Firebase config
const firebaseConfig = {
  apiKey: 'AIzaSyCfR0ZVpnSoSoUpcXBRRHv-7Ur94xSkJ8g',
  authDomain: 'moviesandmusic-2ff02.firebaseapp.com',
  databaseURL: 'https://moviesandmusic-2ff02.firebaseio.com',
  storageBucket: 'moviesandmusic-2ff02.appspot.com'
};
// react-redux-firebase options
const config = {
  userProfile: 'users', // firebase root where user profiles are stored
  enableLogging: false, // enable/disable Firebase's database logging
};

//const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      reactReduxFirebase(firebaseConfig, config)
    )
  );
}
