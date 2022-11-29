import React from 'react';
import { useSelector } from 'react-redux';
import { BiCopy } from 'react-icons/bi';
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
          <BiCopy
            className="icon"
            type="button"
            onClick={() => {
              navigator.clipboard.writeText(currencyResult.result);
            }}
          />
        </>
      ) : (
        <span className="grey">
          Здесь появится результат
        </span>
      )}
    </div>
  );
}
