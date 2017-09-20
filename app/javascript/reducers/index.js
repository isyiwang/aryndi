// @flow

import { combineReducers } from 'redux';

import name from './name';

const RESET_APP = 'RESET_APP';

export const resetApp = () => ({ type: RESET_APP });

const reducer = (state, action) => {
  if (RESET_APP === action.type) {
    state = undefined;
  }

  return combineReducers({
    name,
  })(state, action);
};

export default reducer;
