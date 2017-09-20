// @flow

/* eslint no-console:0 */
// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//
// To reference this file, add <%= javascript_pack_tag 'application' %> to the appropriate
// layout file, like app/views/layouts/application.html.erb

import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import throttle from 'lodash/throttle';
import PropTypes from 'prop-types'
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'

import App from '../App';
import HelloContainer from '../hello/HelloContainer';
import reducer from '../reducers';
import { loadState, saveState } from '../localStorage';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});

const client = new ApolloClient({ networkInterface });

let store = createStore(
  combineReducers({
    non_apollo: reducer,
    apollo: client.reducer(),
  }),
  loadState(), // from local storage
  compose(
    applyMiddleware(client.middleware()),
    (typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f,
  ),
);

store.subscribe(throttle(() => (saveState(store.getState())), 1000));

document.addEventListener('DOMContentLoaded', () => (
  ReactDOM.render(
    <ApolloProvider client={client} store={store}>
      <Router>
        <App />
      </Router>
    </ApolloProvider>,
    document.body.appendChild(document.createElement('div')),
  )
));
