import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ToWordsPage from './components/ToWordsPage/ToWordsPage';
import NoPage from './components/NoPage/NoPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import WorkingDaysPage from './components/WorkingDaysPage/WorkingDaysPage';
import TaxPage from './components/TaxPage/TaxPage';
import FindDatePage from './components/FindDatePage/FindDatePage';
import CalendarPage from './components/CalendarPage/CalendarPage';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/to-words" element={<ToWordsPage />} />
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
