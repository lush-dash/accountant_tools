import React from 'react';
import { useSelector } from 'react-redux';
import CopyIcon from '../CopyClipboard/CopyClipboard';
import ResultsLoader from '../ResultsLoader/ResultsLoader';
import './index.css';

export default function Result({ text, result }) {
  const resultsLoader = useSelector((state) => state.resultsLoader);

  if (resultsLoader) {
    return (
      <div className="results-container">
        <ResultsLoader />
      </div>
    );
  }

  return (
    <div className="results-container">
      {result ? (
        <>
          <span className="results-span">
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
