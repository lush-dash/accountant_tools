import React from 'react';
import { useSelector } from 'react-redux';
import { Card, CardText, CardTitle } from 'reactstrap';

export default function ResultCurrency() {
  const currencyResult = useSelector((state) => state.currencyResult);

  if (!currencyResult.eng) return null;

  return (
    <div style={{ display: 'flex', marginTop: 10 }}>
      <Card
        body
        className="my-2"
        style={{
          width: '18rem',
        }}
      >
        <CardTitle tag="h5">
          English
        </CardTitle>
        <CardText>
          {currencyResult.eng}
        </CardText>
      </Card>
      <Card
        body
        className="my-2"
        style={{
          width: '18rem',
        }}
      >
        <CardTitle tag="h5">
          Русский
        </CardTitle>
        <CardText>
          {currencyResult.rus}
        </CardText>
      </Card>
    </div>
  );
}
