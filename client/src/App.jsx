import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import ToWordsPage from './components/ToWordsPage/ToWordsPage';
import NoPage from './components/NoPage/NoPage';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CalendarPage from './components/CalendarPage/CalendarPage';
import TaxPage from './components/TaxPage/TaxPage';

function App() {
  return (
    <div className="main">
      <NavigationBar />
      <Routes>
        <Route path="/towords" element={<ToWordsPage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/tax" element={<TaxPage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
