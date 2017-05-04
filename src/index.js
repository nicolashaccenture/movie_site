import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';
import App from './components/App';

import { fetchAlbumsIfNeeded } from './actions/musicActions';

//  "mocha --reporter progress server/testSetup.js \"src/**/*.test.js\"",

const store = configureStore();

// store.dispatch(fetchAlbumsIfNeeded('matrix')).then(() =>
//   console.log(store.getState())
// );

ReactDOM.render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
