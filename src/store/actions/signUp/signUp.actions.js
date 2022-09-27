import {
  SET_EMAIL,
  SET_ISEMAILCORRECT,
  SET_ISEMAILDIRTY,
  SET_ISPASSWORDCORRECT,
  SET_ISPASSWORDDIRTY,
  SET_ISSIGNUPVALID,
  SET_ISTELCORRECT,
  SET_ISTELDIRTY,
  SET_PASSWORD,
  SET_TEL,
} from './signUp.action-types';

export const setTel = (inputValue) => ({
  type: SET_TEL,
  payload: inputValue,
});
export const setEmail = (inputValue) => ({
  type: SET_EMAIL,
  payload: inputValue,
});
export const setPassword = (inputValue) => ({
  type: SET_PASSWORD,
  payload: inputValue,
});

export const setIsTelDirty = (boolean) => ({
  type: SET_ISTELDIRTY,
  payload: boolean,
});
export const setIsEmailDirty = (boolean) => ({
  type: SET_ISEMAILDIRTY,
  payload: boolean,
});
export const setIsPasswordDirty = (boolean) => ({
  type: SET_ISPASSWORDDIRTY,
  payload: boolean,
});

export const setIsTelCorrect = (boolean) => ({
  type: SET_ISTELCORRECT,
  payload: boolean,
});
export const setIsEmailCorrect = (boolean) => ({
  type: SET_ISEMAILCORRECT,
  payload: boolean,
});
export const setIsPasswordCorrect = (boolean) => ({
  type: SET_ISPASSWORDCORRECT,
  payload: boolean,
});

export const setIsSignUpValid = (boolean) => ({
  type: SET_ISSIGNUPVALID,
  payload: boolean,
});
