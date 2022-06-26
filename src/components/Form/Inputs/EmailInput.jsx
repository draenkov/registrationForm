import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const EmailInput = ({
  emailError,
  setEmailError,
  shouldReset,
  setShouldReset,
}) => {
  const [email, setEmail] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setEmail('');
      setShouldReset(false);
    }
  }, [shouldReset]);

  const checkEmail = () => {
    if (!email) {
      return;
    }
    // eslint-disable-next-line
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      setEmailError('');
    } else {
      setEmailError('invalid email');
    }
  };

  return (
    <div className="emailInput form__field">
      <div className="input__title">
        <p>Email</p>
        {emailDirty && emailError ? (
          <p className="error">{emailError}</p>
        ) : null}
      </div>

      <input
        type="email"
        name="email"
        value={email}
        onBlur={() => {
          setEmailDirty(true);
          checkEmail();
        }}
        onChange={(e) => {
          setEmail(e.target.value);
          if (e.target.value) {
            setEmailError('');
          } else {
            setEmailError('cannot be empty');
          }
        }}
      />
    </div>
  );
};

EmailInput.propTypes = {
  emailError: PropTypes.string.isRequired,
  setEmailError: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
  setShouldReset: PropTypes.func.isRequired,
};
