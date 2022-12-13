import React from 'react';
import { Spinner } from 'reactstrap';
import './index.css';

export default function ResultsLoader() {
  return (
    <div className="loader-container">
      <Spinner className="loader" />
    </div>
  );
}
