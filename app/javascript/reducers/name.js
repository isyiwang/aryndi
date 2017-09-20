// @flow

const initialState = {
  name: null,
};

const NAME_SET = 'NAME_SET';

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_SET: return { ...state, name: action.name };
    default: return state;
  }
};
export default reducer;

export const actions = {
  updateName: (name) => ({ type: NAME_SET, name }),
};

export const getName = (state) => (state.non_apollo.name.name);
