import PropTypes from 'prop-types';

export const SubmitBtn = ({ isSuccessful, isSubmitted }) => (
  <div className="submitInput">
    <p className={isSuccessful && isSubmitted ? 'success' : 'success hidden'}>
      Success!
    </p>
    {/* eslint-disable */}
    <p
      className={
        isSuccessful
          ? 'failure hidden'
          : isSuccessful || isSubmitted
          ? 'failure'
          : 'failure hidden'
      }
    >
      Something goes wrong
    </p>
    {/* eslint-enable */}
    <input className="submitBtn form__btn" type="submit" value="Submit" />
  </div>
);

SubmitBtn.propTypes = {
  isSuccessful: PropTypes.bool.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};
