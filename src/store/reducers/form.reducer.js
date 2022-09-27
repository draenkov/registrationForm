import { SET_STEP } from '../actions/form/form.action-types';

const initialState = {
  step: 'first',
};

export const formReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_STEP:
      return { ...state, step: payload };

    default:
      return state;
  }
};
