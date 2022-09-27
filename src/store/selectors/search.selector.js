/* eslint-disable */

export const telSelector = (store) => store.signUp.tel;
export const emailSelector = (store) => store.signUp.email;
export const passwordSelector = (store) => store.signUp.password;
export const password2Selector = (store) => store.signUp.password2;
export const isTelDirtySelector = (store) => store.signUp.isTelDirty;
export const isEmailDirtySelector = (store) => store.signUp.isEmailDirty;
export const isPasswordDirtySelector = (store) => store.signUp.isPasswordDirty;
export const isPassword2DirtySelector = (store) =>
  store.signUp.isPassword2Dirty;
export const isTelCorrectSelector = (store) => store.signUp.isTelCorrect;
export const isEmailCorrectSelector = (store) => store.signUp.isEmailCorrect;
export const isPasswordCorrectSelector = (store) =>
  store.signUp.isPasswordCorrect;
export const isPassword2CorrectSelector = (store) =>
  store.signUp.isPassword2Correct;
export const isSignUpValidSelector = (store) => store.signUp.isSignUpValid;
