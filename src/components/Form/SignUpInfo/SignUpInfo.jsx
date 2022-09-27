import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  emailSelector,
  isEmailCorrectSelector,
  isEmailDirtySelector,
  isPasswordCorrectSelector,
  isPasswordDirtySelector,
  isSignUpValidSelector,
  isTelCorrectSelector,
  isTelDirtySelector,
  passwordSelector,
  telSelector,
} from '../../../store/selectors/search.selector';
import '../../../style/SignUpInfo.css';
import { validation } from '../../../mock/validation';
import {
  setEmail,
  setIsEmailCorrect,
  setIsEmailDirty,
  setIsPasswordCorrect,
  setIsPasswordDirty,
  setIsSignUpValid,
  setIsTelCorrect,
  setIsTelDirty,
  setPassword,
  setTel,
} from '../../../store/actions/signUp/signUp.actions';

export const SignUpInfo = ({ setNumberOfStep }) => {
  const dispatch = useDispatch();
  const tel = useSelector(telSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const isTelDirty = useSelector(isTelDirtySelector);
  const isEmailDirty = useSelector(isEmailDirtySelector);
  const isPasswordDirty = useSelector(isPasswordDirtySelector);
  const isTelCorrect = useSelector(isTelCorrectSelector);
  const isEmailCorrect = useSelector(isEmailCorrectSelector);
  const isPasswordCorrect = useSelector(isPasswordCorrectSelector);
  const isSignUpValid = useSelector(isSignUpValidSelector);

  useEffect(() => {
    if (!isTelCorrect || !isEmailCorrect || !isPasswordCorrect) {
      dispatch(setIsSignUpValid(false));
    } else {
      dispatch(setIsSignUpValid(true));
    }
  }, [isTelCorrect, isEmailCorrect, isPasswordCorrect]);

  const inputTypes = ['mobilePhone', 'email', 'password'];

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'mobilePhone':
        dispatch(setIsTelDirty(true));
        break;
      case 'email':
        dispatch(setIsEmailDirty(true));
        break;
      case 'password':
        dispatch(setIsPasswordDirty(true));
        break;
      default:
    }
  };

  const telHandler = (e) => {
    dispatch(setTel(e.target.value));
    const re = RegExp(validation[inputTypes[0]].regExp);

    if (!re.test(String(e.target.value).toLowerCase())) {
      dispatch(setIsTelCorrect(false));
    } else {
      dispatch(setIsTelCorrect(true));
    }
  };

  const emailHandler = (e) => {
    dispatch(setEmail(e.target.value));
    const re = RegExp(validation[inputTypes[1]].regExp);

    if (!re.test(String(e.target.value).toLowerCase())) {
      dispatch(setIsEmailCorrect(false));
    } else {
      dispatch(setIsEmailCorrect(true));
    }
  };

  const passwordHandler = (e) => {
    dispatch(setPassword(e.target.value));
    const inputValue = String(e.target.value);
    if (inputValue.length >= 8 && inputValue.length <= 20) {
      dispatch(setIsPasswordCorrect(true));
    } else {
      dispatch(setIsPasswordCorrect(false));
    }
  };

  return (
    <form className="signUpForm">
      <input
        type="tel"
        name={inputTypes[0]}
        placeholder="Mobile phone"
        required={validation[inputTypes[0]].required}
        onChange={(e) => telHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={tel}
        className={!isTelCorrect && isTelDirty ? 'uncorrect' : 'correct'}
      />
      <input
        type="email"
        name={inputTypes[1]}
        placeholder="Email"
        required={validation[inputTypes[1]].required}
        onChange={(e) => emailHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={email}
        className={!isEmailCorrect && isEmailDirty ? 'uncorrect' : 'correct'}
      />
      <input
        type="password"
        name={inputTypes[2]}
        placeholder="Password"
        required={validation[inputTypes[2]].required}
        onChange={(e) => passwordHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={password}
        className={
          !isPasswordCorrect && isPasswordDirty ? 'uncorrect' : 'correct'
        }
      />
      <button
        disabled={!isSignUpValid}
        type="button"
        onClick={() => setNumberOfStep('second')}
      >
        Next
      </button>
    </form>
  );
};

SignUpInfo.propTypes = {
  setNumberOfStep: PropTypes.func,
};

SignUpInfo.defaultProps = {
  setNumberOfStep: () => {},
};
