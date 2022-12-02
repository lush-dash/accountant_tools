import React from 'react';
import CopyIcon from '../CopyClipboard/CopyClipboard';
import './index.css';

export default function Result({ text, result }) {
  return (
    <div className="results-container">
      {result ? (
        <>
          <span>
            {text ? text + result : result}
          </span>
          <CopyIcon copy={result} />
        </>
      ) : (
        <span className="grey">
          Здесь появится результат
        </span>
      )}
    </div>
  );
}
