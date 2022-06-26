import PropTypes from 'prop-types';

export const SubmitBtn = ({ isSuccessful, isSubmitted }) => (
  <div className="submitInput">
    {isSubmitted ? (
      <p className={isSuccessful ? 'success' : 'error'}>
        {isSuccessful ? 'Success!' : 'Something goes wrong'}
      </p>
    ) : null}

    <input className="submitBtn form__btn" type="submit" value="Submit" />
  </div>
);

SubmitBtn.propTypes = {
  isSuccessful: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
