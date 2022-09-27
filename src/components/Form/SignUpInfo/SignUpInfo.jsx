import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  emailSelector,
  isEmailCorrectSelector,
  isEmailDirtySelector,
  isPassword2CorrectSelector,
  isPassword2DirtySelector,
  isPasswordCorrectSelector,
  isPasswordDirtySelector,
  isSignUpValidSelector,
  isTelCorrectSelector,
  isTelDirtySelector,
  password2Selector,
  passwordSelector,
  telSelector,
} from '../../../store/selectors/signUp.selector';
import '../../../style/SignUpInfo.css';
import { validation } from '../../../mock/validation';
import {
  setEmail,
  setIsEmailCorrect,
  setIsEmailDirty,
  setIsPassword2Correct,
  setIsPassword2Dirty,
  setIsPasswordCorrect,
  setIsPasswordDirty,
  setIsSignUpValid,
  setIsTelCorrect,
  setIsTelDirty,
  setPassword,
  setPassword2,
  setTel,
} from '../../../store/actions/signUp/signUp.actions';
import { setStep } from '../../../store/actions/form/form.actions';

export const SignUpInfo = () => {
  const dispatch = useDispatch();
  const tel = useSelector(telSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);
  const password2 = useSelector(password2Selector);
  const isTelDirty = useSelector(isTelDirtySelector);
  const isEmailDirty = useSelector(isEmailDirtySelector);
  const isPasswordDirty = useSelector(isPasswordDirtySelector);
  const isPassword2Dirty = useSelector(isPassword2DirtySelector);
  const isTelCorrect = useSelector(isTelCorrectSelector);
  const isEmailCorrect = useSelector(isEmailCorrectSelector);
  const isPasswordCorrect = useSelector(isPasswordCorrectSelector);
  const isPassword2Correct = useSelector(isPassword2CorrectSelector);
  const isSignUpValid = useSelector(isSignUpValidSelector);

  useEffect(() => {
    if (
      !isTelCorrect ||
      !isEmailCorrect ||
      !isPasswordCorrect ||
      !isPassword2Correct
    ) {
      dispatch(setIsSignUpValid(false));
    } else {
      dispatch(setIsSignUpValid(true));
    }
  }, [isTelCorrect, isEmailCorrect, isPasswordCorrect, isPassword2Correct]);

  const inputTypes = ['mobilePhone', 'email', 'password', 'password2'];

  const blurHandler = (e) => {
    switch (e.target.name) {
      case inputTypes[0]:
        dispatch(setIsTelDirty(true));
        break;
      case inputTypes[1]:
        dispatch(setIsEmailDirty(true));
        break;
      case inputTypes[2]:
        dispatch(setIsPasswordDirty(true));
        break;
      case inputTypes[3]:
        dispatch(setIsPassword2Dirty(true));
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
    if (
      inputValue.length >= validation[inputTypes[2]].minLength &&
      inputValue.length <= validation[inputTypes[2]].maxLength
    ) {
      dispatch(setIsPasswordCorrect(true));
    } else {
      dispatch(setIsPasswordCorrect(false));
    }
  };

  const passwordRepeatHandler = (e) => {
    dispatch(setPassword2(e.target.value));
    const inputValue = String(e.target.value);
    if (inputValue === password) {
      dispatch(setIsPassword2Correct(true));
    } else {
      dispatch(setIsPassword2Correct(false));
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
      <input
        type="password"
        name={inputTypes[3]}
        placeholder="Repeat password"
        required={validation[inputTypes[2]].required}
        onChange={(e) => passwordRepeatHandler(e)}
        onBlur={(e) => blurHandler(e)}
        value={password2}
        className={
          !isPassword2Correct && isPassword2Dirty ? 'uncorrect' : 'correct'
        }
      />
      <button
        disabled={!isSignUpValid}
        type="button"
        onClick={() => dispatch(setStep('second'))}
      >
        Next
      </button>
    </form>
  );
};
