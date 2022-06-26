import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const NameInput = ({ nameError, setNameError, shouldReset }) => {
  const [name, setName] = useState('');
  const [nameDirty, setNameDirty] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setName('');
    }
  }, [shouldReset]);

  const checkName = () => {
    const arr = name.split(' ');
    if (arr[0] === '') {
      setNameError('cannot be empty');
      return;
    }
    if (arr.length > 1 && arr.includes('')) {
      setNameError('only 1 space');
      return;
    }

    if (arr.length !== 2) {
      setNameError('type first and last name');
    }

    arr.forEach((word) => {
      if (word.length < 3 || word.length > 30) {
        setNameError('use from 3 to 30 symbols');
      }
    });
  };

  return (
    <div className="nameInput form__field">
      <div className="input__title">
        <p>Name, Surname</p>
        {nameDirty && nameError ? <p className="error">{nameError}</p> : null}
      </div>

      <input
        type="text"
        name="name"
        onBlur={() => {
          setNameDirty(true);
          checkName();
        }}
        value={name.toUpperCase()}
        onChange={(e) => {
          setName(e.target.value);
          if (e.target.value) {
            setNameError('');
          } else {
            setNameError('cannot be empty');
          }
        }}
      />
    </div>
  );
};

NameInput.propTypes = {
  nameError: PropTypes.string.isRequired,
  setNameError: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
};
