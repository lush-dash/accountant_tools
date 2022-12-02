import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { useDispatch } from 'react-redux';
import FormCurrency from '../FormCurrency/FormCurrency';
import ResultCurrency from '../ResultCurrency/ResultCurrency';
import './index.css';
import Header from '../Header/Header';
import Blob from '../Blob/Blob';
import { clearCurrencyResult } from '../../redux/actions/currencyResultActions';

export default function ToWordsPage() {
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(clearCurrencyResult());
  }, []);

  return (
    <div className="container">
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
      </div>
      <Blob shapeOption="a" colorOption="purple" position={{ right: '20em', top: '5em' }} />
      <Blob shapeOption="b" colorOption="yellow" position={{ right: '-25em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="pink" sizeOption="small" position={{ right: '23em', top: '-5em' }} />
    </div>
  );
}
