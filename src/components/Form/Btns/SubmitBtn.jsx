import PropTypes from 'prop-types';

export const SubmitBtn = ({ isSuccessful, isSubmitted }) => (
  <div className="submitInput">
    <p className={isSuccessful && isSubmitted ? 'success' : 'success hidden'}>
      {isSuccessful ? 'Success!' : 'Something goes wrong'}
    </p>

    <input className="submitBtn form__btn" type="submit" value="Submit" />
  </div>
);

SubmitBtn.propTypes = {
  isSuccessful: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
