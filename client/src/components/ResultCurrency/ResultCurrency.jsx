import React from 'react';
import { useSelector } from 'react-redux';
import CopyIcon from '../CopyClipboard/CopyClipboard';
import './index.css';

export default function ResultCurrency() {
  const currencyResult = useSelector((state) => state.currencyResult);

  return (
    <div className="results-container">
      {currencyResult.result ? (
        <>
          <span>
            {currencyResult.result}
          </span>
          <CopyIcon copy={currencyResult.result} />
        </>
      ) : (
        <span className="grey">
          Здесь появится результат
        </span>
      )}
    </div>
  );
}
