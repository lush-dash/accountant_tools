import React from 'react';
import { useSelector } from 'react-redux';
import CopyIcon from '../CopyClipboard/CopyClipboard';
// import CopyIcon from '../CopyClipboard/CopyClipboard';
import './index.css';

export default function ResultCurrency() {
  const workingDays = useSelector((state) => state.workingDays);

  return (
    <div className="results-container">
      {workingDays ? (
        <>
          <span>
            {workingDays}
          </span>
          <CopyIcon copy={workingDays} />
        </>
      ) : (
        <span className="grey">
          Здесь появится результат
        </span>
      )}
    </div>
  );
}
