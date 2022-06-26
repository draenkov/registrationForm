import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const BirthdayInput = ({
  birthdayError,
  setBirthdayError,
  shouldReset,
  setShouldReset,
}) => {
  const [birthday, setBirthday] = useState('');
  const [birthdayDirty, setBirthdayDirty] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setBirthday('');
      setShouldReset(false);
    }
  }, [shouldReset]);

  return (
    <div className="birthdayInput form__field">
      <div className="input__title">
        <p>Birthday</p>
        {birthdayDirty && birthdayError ? (
          <p className="error">{birthdayError}</p>
        ) : null}
      </div>

      <input
        type="date"
        name="birthday"
        value={birthday}
        onBlur={() => {
          setBirthdayDirty(true);
        }}
        onChange={(e) => {
          setBirthday(e.target.value);
          if (e.target.value) {
            setBirthdayError('');
          } else {
            setBirthdayError('cannot be empty');
          }
        }}
      />
    </div>
  );
};

BirthdayInput.propTypes = {
  birthdayError: PropTypes.string.isRequired,
  setBirthdayError: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
  setShouldReset: PropTypes.func.isRequired,
};
