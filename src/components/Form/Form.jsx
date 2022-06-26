import { useRef, useState } from 'react';
import '../../style/Form.css';
import { SubmitBtn } from './Btns/SubmitBtn';
import { BirthdayInput } from './Inputs/BirthdayInput';
import { EmailInput } from './Inputs/EmailInput';
import { MessageInput } from './Inputs/MessageInput';
import { NameInput } from './Inputs/NameInput';
import { PhoneInput } from './Inputs/PhoneInput';

export const Form = () => {
  // Submit
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [shouldReset, setShouldReset] = useState(false);
  const [loading, setLoading] = useState(false);
  //  Errors
  const [nameError, setNameError] = useState('cannot be empty');
  const [emailError, setEmailError] = useState('cannot be empty');
  const [phoneError, setPhoneError] = useState('cannot be empty');
  const [birthdayError, setBirthdayError] = useState('cannot be empty');
  const [messageError, setMessageError] = useState('cannot be empty');

  const form = useRef();

  return (
    <>
      <form
        className="form"
        id="formId"
        onSubmit={async (e) => {
          e.preventDefault();

          if (
            nameError ||
            emailError ||
            phoneError ||
            birthdayError ||
            messageError
          ) {
            return;
          }
          setLoading(true);
          const formData = new FormData(form.current);
          const response = await fetch(
            'https://jsonplaceholder.typicode.com/posts',
            {
              method: 'POST',
              body: formData,
            }
          );
          // const result = await response.json();
          setIsSuccessful(response.ok);

          setShouldReset(true);
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 5000);
          setLoading(false);
        }}
        ref={form}
      >
        <NameInput
          nameError={nameError}
          setNameError={setNameError}
          shouldReset={shouldReset}
        />
        <EmailInput
          emailError={emailError}
          setEmailError={setEmailError}
          shouldReset={shouldReset}
        />
        <PhoneInput
          phoneError={phoneError}
          setPhoneError={setPhoneError}
          shouldReset={shouldReset}
        />
        <BirthdayInput
          birthdayError={birthdayError}
          setBirthdayError={setBirthdayError}
          shouldReset={shouldReset}
        />
        <MessageInput
          messageError={messageError}
          setMessageError={setMessageError}
          shouldReset={shouldReset}
        />
        <SubmitBtn isSuccessful={isSuccessful} isSubmitted={isSubmitted} />
      </form>
      {loading ? (
        <div className="loading">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle
              className="path"
              cx="25"
              cy="25"
              r="20"
              fill="none"
              strokeWidth="5"
            />
          </svg>
        </div>
      ) : null}
    </>
  );
};
