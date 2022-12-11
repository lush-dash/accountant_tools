import React, { useEffect } from 'react';
import { Card } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormNumberToWords from '../../components/FormNumberToWords/FormNumberToWords';
import Result from '../../components/Result/Result';
import Header from '../../components/Header/Header';
import Blob from '../../components/Blob/Blob';
import { clearNumberInWords } from '../../redux/actions/numberInWordsActions';

export default function ToWordsPage() {
  const numberInWords = useSelector((state) => state.numberInWords);
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(clearNumberInWords());
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
          <FormNumberToWords />
          <hr />
          <Result result={numberInWords} />
        </Card>
      </div>
      <Blob shapeOption="a" colorOption="purple" position={{ right: '20em', top: '5em' }} />
      <Blob shapeOption="b" colorOption="yellow" position={{ right: '-25em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="pink" sizeOption="small" position={{ right: '23em', top: '-5em' }} />
    </div>
  );
}
