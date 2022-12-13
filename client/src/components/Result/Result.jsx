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
    <div data-testid="results-container" className="results-container">
      {result ? (
        <>
          <span data-testid="results-span" className="results-span">
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
