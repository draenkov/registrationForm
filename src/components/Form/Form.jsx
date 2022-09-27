import { useSelector } from 'react-redux';
import { stepSelector } from '../../store/selectors/form.selector';
import '../../style/Form.css';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { SignUpInfo } from './SignUpInfo/SignUpInfo';

export const Form = () => {
  const step = useSelector(stepSelector);

  return (
    <main>
      <div className="stepper">
        <div className="stepper-wrap">
          <div className="firstStep">
            <div className="circle circle-active">
              <p>1</p>
            </div>
            <p className="stepperText">SignUpInfo</p>
          </div>
          <div className="line" />
          <div className="secondStep">
            <div
              className={step === 'second' ? 'circle circle-active' : 'circle'}
            >
              <p>2</p>
            </div>
            <p className="stepperText">PersonalInfo</p>
          </div>
        </div>
      </div>
      <div className="form">
        {step === 'first' ? <SignUpInfo /> : <PersonalInfo />}
      </div>
    </main>
  );
};
