import { combineReducers } from 'redux';
import { signUpReducer } from './signUp.reducer';

export const reducers = combineReducers({
  signUp: signUpReducer,
});
