import { useEffect, useRef } from 'react';
import { Form } from './components/Form/Form';
import './style/App.css';

const App = () => {
  const executedRef = useRef(false);

  useEffect(() => {
    if (executedRef.current) {
      return;
    }

    executedRef.current = true;
  }, []);

  return (
    <div className="App">
      <Form />
    </div>
  );
};
export default App;
