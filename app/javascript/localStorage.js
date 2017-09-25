// @flow

import type { TReduxState } from './reducers';

const STATE_KEY: "__APP_STATE__" = "__APP_STATE__";

export const loadState: () => TReduxState | void = () => {
  try {
    const serializedState: ?string = localStorage.getItem(STATE_KEY);
    return (!!serializedState) ? JSON.parse(serializedState) : undefined;
  } catch (err) {
    console.error('Unable to deserialize state:', err);
    return undefined;
  }
}

export const saveState = (state: TReduxState) => {
  try {
    const serializedState: string = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    console.error(err);
  }
}
