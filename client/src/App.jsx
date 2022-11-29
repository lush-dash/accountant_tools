import { Card } from 'reactstrap';
import FormCurrency from './components/FormCurrency/FormCurrency';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultCurrency from './components/ResultCurrency/ResultCurrency';

function App() {
  return (
    <Card
      body
      className="my-2"
      style={{
        width: '50rem',
      }}
    >
      <FormCurrency />
      <hr />
      <ResultCurrency />
    </Card>
  );
}

export default App;
