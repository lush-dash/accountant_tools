import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import NumberToWordsPage from './pages/NumberToWordsPage/NumberToWordsPage';
import NoPage from './pages/NoPage/NoPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import WorkingDaysPage from './pages/WorkingDaysPage/WorkingDaysPage';
import TaxPage from './pages/TaxPage/TaxPage';
import FindDatePage from './pages/FindDatePage/FindDatePage';
import CalendarPage from './pages/CalendarPage/CalendarPage';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/number-to-words" element={<NumberToWordsPage />} />
        <Route path="/working-days" element={<WorkingDaysPage />} />
        <Route path="/date" element={<FindDatePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tax" element={<TaxPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
