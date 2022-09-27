import {
  SET_EMAIL,
  SET_ISEMAILCORRECT,
  SET_ISEMAILDIRTY,
  SET_ISPASSWORD2CORRECT,
  SET_ISPASSWORD2DIRTY,
  SET_ISPASSWORDCORRECT,
  SET_ISPASSWORDDIRTY,
  SET_ISSIGNUPVALID,
  SET_ISTELCORRECT,
  SET_ISTELDIRTY,
  SET_PASSWORD,
  SET_PASSWORD2,
  SET_TEL,
} from '../actions/signUp/signUp.action-types';

const initialState = {
  tel: '',
  email: '',
  password: '',
  password2: '',
  isTelDirty: false,
  isEmailDirty: false,
  isPasswordDirty: false,
  isPassword2Dirty: false,
  isTelCorrect: false,
  isEmailCorrect: false,
  isPasswordCorrect: false,
  isPassword2Correct: false,
  isSignUpValid: false,
};

export const signUpReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TEL:
      return { ...state, tel: payload };

    case SET_EMAIL:
      return { ...state, email: payload };

    case SET_PASSWORD:
      return { ...state, password: payload };

    case SET_PASSWORD2:
      return { ...state, password2: payload };

    case SET_ISTELDIRTY:
      return { ...state, isTelDirty: payload };

    case SET_ISEMAILDIRTY:
      return { ...state, isEmailDirty: payload };

    case SET_ISPASSWORDDIRTY:
      return { ...state, isPasswordDirty: payload };

    case SET_ISPASSWORD2DIRTY:
      return { ...state, isPassword2Dirty: payload };

    case SET_ISTELCORRECT:
      return { ...state, isTelCorrect: payload };

    case SET_ISEMAILCORRECT:
      return { ...state, isEmailCorrect: payload };

    case SET_ISPASSWORDCORRECT:
      return { ...state, isPasswordCorrect: payload };

    case SET_ISPASSWORD2CORRECT:
      return { ...state, isPassword2Correct: payload };

    case SET_ISSIGNUPVALID:
      return { ...state, isSignUpValid: payload };

    default:
      return state;
  }
};
