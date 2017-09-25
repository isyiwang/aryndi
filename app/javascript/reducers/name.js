// @flow

import type { TReduxState } from '../reducers';
import type { TReduxDispatch } from './redux_dispatch_type';

// -- State

export type TReduxNameState = {
  name: ?string,
};

const initialState: TReduxNameState = {
  name: null,
};

// -- Actions

const ACTION_NAME_SET: 'ACTION_NAME_SET' = 'ACTION_NAME_SET';

type TReduxSetNameAction = {
  type: typeof ACTION_NAME_SET,
  name: string,
};

export type TReduxNameAction =
  | TReduxSetNameAction
  ;

// -- Dispatch

type TReduxNameDispatch = TReduxDispatch<TReduxNameAction, TReduxNameState>;

const reducer = (state: TReduxNameState = initialState, action: TReduxNameAction) => {
  switch (action.type) {
    case ACTION_NAME_SET: return { ...state, name: action.name };
    default: return state;
  }
};
export default reducer;

export const actions = {
  updateName: (name: string) => ({ type: ACTION_NAME_SET, name }),
};

export const getName = (state: TReduxState) => (state.name.name);
