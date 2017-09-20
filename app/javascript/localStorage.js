// @flow

const STATE_KEY: string = "__APP_STATE__";

export const loadState = () => {
  try {
    const serializedState: ?string = localStorage.getItem(STATE_KEY);
    if (serializedState) {
      return JSON.parse(serializedState);
    }

    return undefined;
  } catch (err) {
    return undefined;
  }
}

export const saveState = (state: Object) => {
  try {
    const serializedState: string = JSON.stringify(state);
    localStorage.setItem(STATE_KEY, serializedState);
  } catch (err) {
    console.error(err);
  }
}
