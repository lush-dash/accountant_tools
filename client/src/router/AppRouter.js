import React from 'react';
import { Route, Routes } from 'react-router-dom';
import FindDatePage from '../pages/FindDatePage/FindDatePage';
import NoPage from '../pages/NoPage/NoPage';
// import TaxPage from '../pages/TaxPage/TaxPage';
import WorkingDaysPage from '../pages/WorkingDaysPage/WorkingDaysPage';
import NumberToWordsPage from '../pages/NumberToWordsPage/NumberToWordsPage';

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/number-to-words" element={<NumberToWordsPage />} />
      <Route path="/working-days" element={<WorkingDaysPage />} />
      <Route path="/date" element={<FindDatePage />} />
      {/* <Route path="/tax" element={<TaxPage />} /> */}
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}
