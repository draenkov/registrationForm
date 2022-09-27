import { useState } from 'react';
import '../../style/Form.css';
import { PersonalInfo } from './PersonalInfo/PersonalInfo';
import { SignUpInfo } from './SignUpInfo/SignUpInfo';

export const Form = () => {
  const [numberOfStep, setNumberOfStep] = useState('first');

  return (
    <main>
      <div className="stepper">
        <div className="firstStep">
          <div className="circle circle-active">
            <p>1</p>
          </div>
          <p>SignUpInfo</p>
        </div>
        <div className="secondStep">
          <div className="circle">
            <p>2</p>
          </div>
          <p>PersonalInfo</p>
        </div>
      </div>
      <div className="form">
        {numberOfStep === 'first' ? (
          <SignUpInfo setNumberOfStep={setNumberOfStep} />
        ) : (
          <PersonalInfo setNumberOfStep={setNumberOfStep} />
        )}
      </div>
    </main>
  );
};
