import { SET_STEP } from './form.action-types';

export const setStep = (step) => ({
  type: SET_STEP,
  payload: step,
});
