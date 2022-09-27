import { useSelector } from 'react-redux';
import {
  birthdaySelector,
  firstNameSelector,
  hobbySelector,
  lastNameSelector,
  oceanSelector,
  sexSelector,
} from '../../../store/selectors/personal.selector';
import {
  emailSelector,
  passwordSelector,
  telSelector,
} from '../../../store/selectors/signUp.selector';
import '../../../style/Modal.css';
import CrossIcon from '../../Icon/IconComponents/CrossIcon';

export const Modal = () => {
  const firstName = useSelector(firstNameSelector);
  const lastName = useSelector(lastNameSelector);
  const sex = useSelector(sexSelector);
  const birthday = useSelector(birthdaySelector);
  const ocean = useSelector(oceanSelector);
  const hobby = useSelector(hobbySelector);
  const phone = useSelector(telSelector);
  const email = useSelector(emailSelector);
  const password = useSelector(passwordSelector);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modalItem">
          <p>First Name:</p>
          <p>{firstName}</p>
        </div>
        <div className="modalItem">
          <p>Last Name:</p>
          <p>{lastName}</p>
        </div>
        <div className="modalItem">
          <p>Sex:</p>
          <p>{sex}</p>
        </div>
        <div className="modalItem">
          <p>Birthday:</p>
          <p>{birthday}</p>
        </div>
        <div className="modalItem">
          <p>Favorite Ocean:</p>
          <p>{ocean}</p>
        </div>
        <div className="modalItem">
          <p>Hobby:</p>
          {hobby.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
        <div className="modalItem">
          <p>Phone:</p>
          <p>{phone}</p>
        </div>
        <div className="modalItem">
          <p>Email:</p>
          <p>{email}</p>
        </div>
        <div className="modalItem">
          <p>Password:</p>
          <p>{password}</p>
        </div>
        <button
          type="button"
          onClick={() => {
            document.location.reload();
          }}
        >
          <CrossIcon fill="#ffffff" />
        </button>
      </div>
    </div>
  );
};
