import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { setStep } from '../../../store/actions/form/form.actions';
import {
  deleteHobby,
  setBirthday,
  setFirstName,
  setHobby,
  setIsBirthdayCorrect,
  setIsBirthdayDirty,
  setIsFirstNameCorrect,
  setIsFirstNameDirty,
  setIsHobbyCorrect,
  setIsHobbyDirty,
  setIsLastNameCorrect,
  setIsLastNameDirty,
  setIsOceanCorrect,
  setIsOceanDirty,
  setLastName,
  setOcean,
  setPersonalValid,
  setSex,
} from '../../../store/actions/personalInfo/personal.actions';
import {
  birthdaySelector,
  firstNameSelector,
  hobbySelector,
  isBirthdayCorrectSelector,
  isBirthdayDirtySelector,
  isFirstNameCorrectSelector,
  isFirstNameDirtySelector,
  isHobbyCorrectSelector,
  isHobbyDirtySelector,
  isLastNameCorrectSelector,
  isLastNameDirtySelector,
  isOceanCorrectSelector,
  isOceanDirtySelector,
  isPersonalValidSelector,
  lastNameSelector,
} from '../../../store/selectors/personal.selector';
import '../../../style/PersonalInfo.css';
import { validation } from '../../../mock/validation';

export const PersonalInfo = () => {
  const dispatch = useDispatch();
  const firstName = useSelector(firstNameSelector);
  const lastName = useSelector(lastNameSelector);
  const birthday = useSelector(birthdaySelector);
  const hobby = useSelector(hobbySelector);
  const isFirstNameDirty = useSelector(isFirstNameDirtySelector);
  const isLastNameDirty = useSelector(isLastNameDirtySelector);
  const isBirthdayDirty = useSelector(isBirthdayDirtySelector);
  const isOceanDirty = useSelector(isOceanDirtySelector);
  const isHobbyDirty = useSelector(isHobbyDirtySelector);
  const isFirstNameCorrect = useSelector(isFirstNameCorrectSelector);
  const isLastNameCorrect = useSelector(isLastNameCorrectSelector);
  const isBirthdayCorrect = useSelector(isBirthdayCorrectSelector);
  const isOceanCorrect = useSelector(isOceanCorrectSelector);
  const isHobbyCorrect = useSelector(isHobbyCorrectSelector);
  const isPersonalValid = useSelector(isPersonalValidSelector);

  const [birthdayInputType, setBirthdayInputType] = useState('text');

  useEffect(() => {
    if (window.innerWidth <= 480) {
      setBirthdayInputType('date');
    }
    if (
      !isFirstNameCorrect ||
      !isLastNameCorrect ||
      !isBirthdayCorrect ||
      !isOceanCorrect ||
      !isHobbyCorrect
    ) {
      dispatch(setPersonalValid(false));
    } else {
      dispatch(setPersonalValid(true));
    }
  }, [
    isFirstNameCorrect,
    isLastNameCorrect,
    isBirthdayCorrect,
    isOceanCorrect,
    isHobbyCorrect,
  ]);

  const inputTypes = [
    'firstName',
    'lastName',
    'sex',
    'birthday',
    'ocean',
    'hobby',
  ];

  const blurHandler = (e) => {
    switch (e.target.name) {
      case inputTypes[0]:
        dispatch(setIsFirstNameDirty(true));
        break;

      case inputTypes[1]:
        dispatch(setIsLastNameDirty(true));
        break;

      case inputTypes[3]:
        dispatch(setIsBirthdayDirty(true));
        break;

      case inputTypes[4]:
        dispatch(setIsOceanDirty(true));
        break;

      default:
    }
  };

  const firstNameHandler = (e) => {
    dispatch(setFirstName(e.target.value));
    const result = String(e.target.value);
    if (
      result.length >= validation[inputTypes[0]].minLength &&
      result.length <= validation[inputTypes[0]].maxLength
    ) {
      dispatch(setIsFirstNameCorrect(true));
    } else {
      dispatch(setIsFirstNameCorrect(false));
    }
  };

  const lastNameHandler = (e) => {
    dispatch(setLastName(e.target.value));
    const result = String(e.target.value);
    if (
      result.length >= validation[inputTypes[1]].minLength &&
      result.length <= validation[inputTypes[1]].maxLength
    ) {
      dispatch(setIsLastNameCorrect(true));
    } else {
      dispatch(setIsLastNameCorrect(false));
    }
  };

  const sexHandler = (e) => {
    dispatch(setSex(e.target.value));
  };

  const birthdayHandler = (e) => {
    dispatch(setBirthday(e.target.value));
    const date = new Date(String(e.target.value));
    const currentDate = new Date();
    const age = currentDate.getFullYear() - date.getFullYear();
    if (
      age >= validation[inputTypes[3]].minAge &&
      age <= validation[inputTypes[3]].maxAge
    ) {
      dispatch(setIsBirthdayCorrect(true));
    } else {
      dispatch(setIsBirthdayCorrect(false));
    }
  };

  const oceanHandler = (e) => {
    dispatch(setOcean(e.target.value));
    dispatch(setIsOceanCorrect(true));
  };

  const hobbyHandler = (e) => {
    dispatch(setIsHobbyDirty(true));
    if (e.target.checked) {
      dispatch(setHobby(e.target.value));
      dispatch(setIsHobbyCorrect(true));
    } else if (hobby.length > 1) {
      dispatch(deleteHobby(e.target.value));
      dispatch(setIsHobbyCorrect(true));
    } else if (hobby.length === 1) {
      dispatch(deleteHobby(e.target.value));
      dispatch(setIsHobbyCorrect(false));
    } else {
      dispatch(setIsHobbyCorrect(false));
    }
  };

  return (
    <form className="personalInfoForm">
      <input
        type="text"
        name={inputTypes[0]}
        placeholder="First name"
        onBlur={(e) => blurHandler(e)}
        value={firstName}
        className={
          !isFirstNameCorrect && isFirstNameDirty ? 'uncorrect' : 'correct'
        }
        required={validation[inputTypes[0]].required}
        onChange={(e) => firstNameHandler(e)}
      />
      <input
        type="text"
        name={inputTypes[1]}
        placeholder="Last name"
        onBlur={(e) => blurHandler(e)}
        value={lastName}
        className={
          !isLastNameCorrect && isLastNameDirty ? 'uncorrect' : 'correct'
        }
        required={validation[inputTypes[1]].required}
        onChange={(e) => lastNameHandler(e)}
      />
      <fieldset>
        <label htmlFor="male">
          <input
            type="radio"
            id="male"
            name={inputTypes[2]}
            defaultChecked
            value="male"
            onChange={(e) => sexHandler(e)}
          />
          <p>Male</p>
        </label>

        <label htmlFor="female">
          <input
            type="radio"
            id="female"
            name={inputTypes[2]}
            value="female"
            onChange={(e) => sexHandler(e)}
          />
          <p>Female</p>
        </label>
      </fieldset>
      <p>Birthday</p>
      <input
        type={birthdayInputType}
        name={inputTypes[3]}
        placeholder="Birthday"
        onFocus={() => {
          setBirthdayInputType('date');
        }}
        onBlur={(e) => {
          blurHandler(e);
          if (window.innerWidth > 480) {
            setBirthdayInputType('text');
          }
        }}
        onChange={(e) => birthdayHandler(e)}
        value={birthday}
        className={
          !isBirthdayCorrect && isBirthdayDirty ? 'uncorrect' : 'correct'
        }
      />
      <p>Favorite ocean</p>
      <select
        name={inputTypes[4]}
        id={inputTypes[4]}
        onClick={(e) => oceanHandler(e)}
        onBlur={(e) => {
          blurHandler(e);
        }}
        className={!isOceanCorrect && isOceanDirty ? 'uncorrect' : 'correct'}
      >
        {validation[inputTypes[4]].oneOf.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <p>Your hobbies</p>
      <fieldset
        onChange={(e) => hobbyHandler(e)}
        onBlur={(e) => {
          blurHandler(e);
        }}
        className={!isHobbyCorrect && isHobbyDirty ? 'uncorrect' : 'correct'}
      >
        {validation[inputTypes[5]].anyOf.map((option) => (
          <div key={option} className="checkboxInput">
            <input
              type="checkbox"
              id={option}
              value={option}
              name={inputTypes[5]}
            />
            <label htmlFor={option}>{option}</label>
          </div>
        ))}
      </fieldset>

      <div className="buttons">
        <button type="button" onClick={() => dispatch(setStep('first'))}>
          Prev
        </button>
        <button
          type="button"
          disabled={!isPersonalValid}
          onClick={() => dispatch(setStep('third'))}
        >
          Complete
        </button>
      </div>
    </form>
  );
};
