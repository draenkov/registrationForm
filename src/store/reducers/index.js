import { combineReducers } from 'redux';
import { formReducer } from './form.reducer';
import { personalReducer } from './personal.reducer';
import { signUpReducer } from './signUp.reducer';

export const reducers = combineReducers({
  signUp: signUpReducer,
  form: formReducer,
  personal: personalReducer,
});
