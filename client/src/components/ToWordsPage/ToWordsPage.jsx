import React from 'react';
import { Card } from 'reactstrap';
import FormCurrency from '../FormCurrency/FormCurrency';
import ResultCurrency from '../ResultCurrency/ResultCurrency';
import './index.css';
import './blobz.css';
import Header from '../Header/Header';

export default function ToWordsPage() {
  return (
    <div className="container">
      <div className="tk-blob">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 747.2 726.7">
          <path d="M539.8 137.6c98.3 69 183.5 124 203 198.4 19.3 74.4-27.1 168.2-93.8 245-66.8 76.8-153.8 136.6-254.2 144.9-100.6 8.2-214.7-35.1-292.7-122.5S-18.1 384.1 7.4 259.8C33 135.6 126.3 19 228.5 2.2c102.1-16.8 213.2 66.3 311.3 135.4z" />
        </svg>
      </div>
      <div className="page-content">
        <Header header="Сумма прописью" />
        <Card
          body
          className="my-2"
          style={{ width: '30em' }}
        >
          <FormCurrency />
          <hr />
          <ResultCurrency />
        </Card>
        <div className="tk-blob pink">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 451.6 385.5">
            <path d="M381.4 86.5c43.5 48 77.5 110.3 68.8 168.7-8.6 58.4-59.9 113-114.8 126.7-54.9 13.6-113.4-13.7-176.6-40.6-63.1-27-130.7-53.5-151.5-102.8-20.9-49.2 5.1-121.1 50.3-169.5C102.8 20.7 167.1-3.9 225.9.5c58.8 4.5 111.9 38.1 155.5 86z" />
          </svg>
        </div>
      </div>
      <div className="tk-blob yellow">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 428.4 394.6">
          <path d="M369.4 109.2c43.2 55.3 71.5 121.4 53.4 167.3-18.2 45.8-82.8 71.4-140.5 91.7-57.8 20.4-108.7 35.4-152.9 20.3C85.1 373.4 47.6 328.3 23.2 267c-24.5-61.2-35.8-138.6-2.5-191.7C54.1 22.2 132-6.6 200 1.3c68 7.9 126.1 52.5 169.4 107.9z" />
        </svg>
      </div>
    </div>
  );
}
