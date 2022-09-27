import PropTypes from 'prop-types';
import '../../../style/PersonalInfo.css';

export const PersonalInfo = ({ setNumberOfStep }) => (
  <form className="personalInfoForm">
    <input type="text" placeholder="secondStep" />
    <input type="text" />
    <input type="text" />
    <div className="buttons">
      <button type="button" onClick={() => setNumberOfStep('first')}>
        Prev
      </button>
      <button type="button">Finish</button>
    </div>
  </form>
);

PersonalInfo.propTypes = {
  setNumberOfStep: PropTypes.func,
};

PersonalInfo.defaultProps = {
  setNumberOfStep: () => {},
};
