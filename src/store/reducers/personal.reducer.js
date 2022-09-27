import {
  SET_FIRSTNAME,
  SET_LASTNAME,
  SET_SEX,
  SET_BIRTHDAY,
  SET_OCEAN,
  SET_HOBBY,
  SET_ISFIRSTNAMEDIRTY,
  SET_ISLASTNAMEDIRTY,
  SET_ISSEXDIRTY,
  SET_ISBIRTHDAYDIRTY,
  SET_ISOCEANDIRTY,
  SET_ISHOBBYDIRTY,
  SET_ISFIRSTNAMECORRECT,
  SET_ISLASTNAMECORRECT,
  SET_ISSEXCORRECT,
  SET_ISBIRTHDAYCORRECT,
  SET_ISOCEANCORRECT,
  SET_ISHOBBYCORRECT,
  SET_PERSONALVALID,
  DELETE_HOBBY,
} from '../actions/personalInfo/personal.action-types';

const initialState = {
  firstName: '',
  lastName: '',
  sex: 'male',
  birthday: '',
  ocean: '',
  hobby: [],
  isFirstNameDirty: false,
  isLastNameDirty: false,
  isSexDirty: false,
  isBirthdayDirty: false,
  isOceanDirty: true,
  isHobbyDirty: false,
  isFirstNameCorrect: false,
  isLastNameCorrect: false,
  isSexCorrect: false,
  isBirthdayCorrect: false,
  isOceanCorrect: false,
  isHobbyCorrect: false,
  isPersonalValid: false,
};

export const personalReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_FIRSTNAME:
      return { ...state, firstName: payload };

    case SET_LASTNAME:
      return { ...state, lastName: payload };

    case SET_SEX:
      return { ...state, sex: payload };

    case SET_BIRTHDAY:
      return { ...state, birthday: payload };

    case SET_OCEAN:
      return { ...state, ocean: payload };

    case SET_HOBBY: {
      const hobbyArray = [...state.hobby];
      hobbyArray.push(payload);
      return { ...state, hobby: hobbyArray };
    }

    case DELETE_HOBBY: {
      const hobbyArray = [...state.hobby];
      const newHobbyArray = hobbyArray.filter((item) => item !== payload);
      return { ...state, hobby: newHobbyArray };
    }

    case SET_ISFIRSTNAMEDIRTY:
      return { ...state, isFirstNameDirty: payload };

    case SET_ISLASTNAMEDIRTY:
      return { ...state, isLastNameDirty: payload };

    case SET_ISSEXDIRTY:
      return { ...state, isSexDirty: payload };

    case SET_ISBIRTHDAYDIRTY:
      return { ...state, isBirthdayDirty: payload };

    case SET_ISOCEANDIRTY:
      return { ...state, isOceanDirty: payload };

    case SET_ISHOBBYDIRTY:
      return { ...state, isHobbyDirty: payload };

    case SET_ISFIRSTNAMECORRECT:
      return { ...state, isFirstNameCorrect: payload };

    case SET_ISLASTNAMECORRECT:
      return { ...state, isLastNameCorrect: payload };

    case SET_ISSEXCORRECT:
      return { ...state, isSexCorrect: payload };

    case SET_ISBIRTHDAYCORRECT:
      return { ...state, isBirthdayCorrect: payload };

    case SET_ISOCEANCORRECT:
      return { ...state, isOceanCorrect: payload };

    case SET_ISHOBBYCORRECT:
      return { ...state, isHobbyCorrect: payload };

    case SET_PERSONALVALID:
      return { ...state, isPersonalValid: payload };

    default:
      return state;
  }
};
