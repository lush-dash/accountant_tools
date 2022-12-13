import React from 'react';
import Blob from '../../components/Blob/Blob';
import './index.css';

export default function NoPage() {
  return (
    <div className="container">
      <div className="error-message-container">
        <h1 className="error-header">404</h1>
        <p className="error-text">Страница не найдена:(</p>
      </div>
      <Blob shapeOption="b" colorOption="pink" position={{ right: '-25em', top: '15em' }} />
      <Blob shapeOption="a" colorOption="purple" sizeOption="huge" position={{ right: '0em', top: '-14em' }} />
      <Blob shapeOption="c" colorOption="yellow" sizeOption="small" position={{ right: '23em', top: '-45em' }} />
    </div>
  );
}
