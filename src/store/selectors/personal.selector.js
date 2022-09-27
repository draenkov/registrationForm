/* eslint-disable */

export const firstNameSelector = (store) => store.personal.firstName;
export const lastNameSelector = (store) => store.personal.lastName;
export const sexSelector = (store) => store.personal.sex;
export const birthdaySelector = (store) => store.personal.birthday;
export const oceanSelector = (store) => store.personal.ocean;
export const hobbySelector = (store) => store.personal.hobby;
export const isFirstNameDirtySelector = (store) =>
  store.personal.isFirstNameDirty;
export const isLastNameDirtySelector = (store) =>
  store.personal.isLastNameDirty;
export const isSexDirtySelector = (store) => store.personal.isSexDirty;
export const isBirthdayDirtySelector = (store) =>
  store.personal.isBirthdayDirty;
export const isOceanDirtySelector = (store) => store.personal.isOceanDirty;
export const isHobbyDirtySelector = (store) => store.personal.isHobbyDirty;
export const isFirstNameCorrectSelector = (store) =>
  store.personal.isFirstNameCorrect;
export const isLastNameCorrectSelector = (store) =>
  store.personal.isLastNameCorrect;
export const isSexCorrectSelector = (store) => store.personal.isSexCorrect;
export const isBirthdayCorrectSelector = (store) =>
  store.personal.isBirthdayCorrect;
export const isOceanCorrectSelector = (store) => store.personal.isOceanCorrect;
export const isHobbyCorrectSelector = (store) => store.personal.isHobbyCorrect;
export const isPersonalValidSelector = (store) =>
  store.personal.isPersonalValid;
