import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const MessageInput = ({
  messageError,
  setMessageError,
  shouldReset,
  setShouldReset,
}) => {
  const [message, setMessage] = useState('');
  const [messageDirty, setMessageDirty] = useState(false);

  useEffect(() => {
    if (shouldReset) {
      setMessage('');
      setShouldReset(false);
    }
  }, [shouldReset]);

  const checkMessage = () => {
    if (message.length < 10) {
      setMessageError('min 10 symbols');
    }
  };

  return (
    <div className="messageInput form__field">
      <div className="input__title">
        <p>Message</p>
        {messageDirty && messageError ? (
          <p className="error">{messageError}</p>
        ) : null}
      </div>

      <textarea
        type="text"
        maxLength="300"
        rows="3"
        name="message"
        onBlur={() => {
          setMessageDirty(true);
          checkMessage();
        }}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
          if (e.target.value) {
            setMessageError('');
          } else {
            setMessageError('cannot be empty');
          }
        }}
      />
    </div>
  );
};

MessageInput.propTypes = {
  messageError: PropTypes.string.isRequired,
  setMessageError: PropTypes.func.isRequired,
  shouldReset: PropTypes.bool.isRequired,
  setShouldReset: PropTypes.func.isRequired,
};
