// @flow

import React from 'react';
import { ApolloClient, createNetworkInterface } from 'react-apollo';
import { combineReducers } from 'redux';

import name from './name';
import type { TReduxNameAction, TReduxNameState } from './name';

export type TReduxState = {
  apollo: any,
  name: TReduxNameState,
};

const ACTION_RESET_APP: 'ACTION_RESET_APP' = 'ACTION_RESET_APP';
type TReduxResetAppAction = {
  type: typeof ACTION_RESET_APP,
}

export type TReduxAction =
  | TReduxResetAppAction
  | TReduxNameAction
  ;

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:3000/graphql'
});
export const apolloClient = new ApolloClient({ networkInterface });

export const resetApp: () => TReduxResetAppAction = () => ({ type: ACTION_RESET_APP });

// The overall combined reducer for the whole app.
// Note it includes both Apollo and non-apollo reducers.
export default (state: TReduxState | void, action: TReduxAction) => {
  if (ACTION_RESET_APP === action.type) {
    state = undefined;
  }

  return combineReducers({
    name,
    apollo: apolloClient.reducer(),
  })(state, action);
};
