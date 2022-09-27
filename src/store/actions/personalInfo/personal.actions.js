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
} from './personal.action-types';

export const setFirstName = (inputValue) => ({
  type: SET_FIRSTNAME,
  payload: inputValue,
});
export const setLastName = (inputValue) => ({
  type: SET_LASTNAME,
  payload: inputValue,
});
export const setSex = (inputValue) => ({
  type: SET_SEX,
  payload: inputValue,
});
export const setBirthday = (inputValue) => ({
  type: SET_BIRTHDAY,
  payload: inputValue,
});
export const setOcean = (inputValue) => ({
  type: SET_OCEAN,
  payload: inputValue,
});
export const setHobby = (inputValue) => ({
  type: SET_HOBBY,
  payload: inputValue,
});
export const deleteHobby = (inputValue) => ({
  type: DELETE_HOBBY,
  payload: inputValue,
});

export const setIsFirstNameDirty = (boolean) => ({
  type: SET_ISFIRSTNAMEDIRTY,
  payload: boolean,
});
export const setIsLastNameDirty = (boolean) => ({
  type: SET_ISLASTNAMEDIRTY,
  payload: boolean,
});
export const setIsSexDirty = (boolean) => ({
  type: SET_ISSEXDIRTY,
  payload: boolean,
});
export const setIsBirthdayDirty = (boolean) => ({
  type: SET_ISBIRTHDAYDIRTY,
  payload: boolean,
});
export const setIsOceanDirty = (boolean) => ({
  type: SET_ISOCEANDIRTY,
  payload: boolean,
});
export const setIsHobbyDirty = (boolean) => ({
  type: SET_ISHOBBYDIRTY,
  payload: boolean,
});

export const setIsFirstNameCorrect = (boolean) => ({
  type: SET_ISFIRSTNAMECORRECT,
  payload: boolean,
});
export const setIsLastNameCorrect = (boolean) => ({
  type: SET_ISLASTNAMECORRECT,
  payload: boolean,
});
export const setIsSexCorrect = (boolean) => ({
  type: SET_ISSEXCORRECT,
  payload: boolean,
});
export const setIsBirthdayCorrect = (boolean) => ({
  type: SET_ISBIRTHDAYCORRECT,
  payload: boolean,
});
export const setIsOceanCorrect = (boolean) => ({
  type: SET_ISOCEANCORRECT,
  payload: boolean,
});
export const setIsHobbyCorrect = (boolean) => ({
  type: SET_ISHOBBYCORRECT,
  payload: boolean,
});

export const setPersonalValid = (boolean) => ({
  type: SET_PERSONALVALID,
  payload: boolean,
});
