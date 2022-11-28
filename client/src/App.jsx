import { Container } from 'reactstrap';
import FormCurrency from './components/FormCurrency/FormCurrency';
import 'bootstrap/dist/css/bootstrap.min.css';
import ResultCurrency from './components/ResultCurrency/ResultCurrency';

function App() {
  return (
    <Container>
      <FormCurrency />
      <ResultCurrency />
    </Container>
  );
}

export default App;
