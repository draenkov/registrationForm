import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';

export const PhoneInput = ({
  phoneError,
  setPhoneError,
  shouldReset,
  setShouldReset,
}) => {
  const [phone, setPhone] = useState('');
  const [phoneDirty, setPhoneDirty] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setPhone('');
      setShouldReset(false);
    }
  }, [shouldReset]);

  return (
    <div className="phoneInput form__field">
      <div className="input__title">
        <p>Phone number</p>
        {phoneDirty && phoneError ? (
          <p className="error">{phoneError}</p>
        ) : null}
      </div>

      <NumberFormat
        name="phone"
        format="+7 (###) ###-####"
        mask="_"
        placeholder="+7 (___) ___-____"
        value={phone}
        onBlur={() => {
          setPhoneDirty(true);
        }}
        onInput={(e) => {
          setPhone(e.target.value);
          if (e.target.value !== '+7 (__) ___-____') {
            setPhoneError('');
          } else {
            setPhoneError('cannot be empty');
          }
        }}
      />
    </div>
  );
};

PhoneInput.propTypes = {
  phoneError: PropTypes.string.isRequired,
  setPhoneError: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
  setShouldReset: PropTypes.func.isRequired,
};
