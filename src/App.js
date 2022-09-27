import { useSelector } from 'react-redux';
import { Footer } from './components/Footer/Footer';
import { Form } from './components/Form/Form';
import { Modal } from './components/Form/Modal/Modal';
import { Header } from './components/Header/Header';
import { stepSelector } from './store/selectors/form.selector';
import './style/App.css';

const App = () => {
  const step = useSelector(stepSelector);
  return (
    <div className="App">
      <Header />
      <Form />
      <Footer />
      {step === 'third' ? <Modal /> : null}
    </div>
  );
};

export default App;
