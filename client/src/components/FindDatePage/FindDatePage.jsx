import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Card, FormGroup, Input, Label,
} from 'reactstrap';
import Blob from '../Blob/Blob';
import CardForContentTitle from '../CardForContentTitle/CardForContentTitle';
import Header from '../Header/Header';
import Result from '../Result/Result';
import SubmitButton from '../SubmitButton/SubmitButton';
import './index.css';

export default function FindDatePage() {
  // const workingDays = useSelector((state) => state.workingDays);
  // const dispatch = useDispatch();

  // useEffect(() => () => {
  //   dispatch(clearWorkingDays());
  // }, []);

  return (
    <div className="container">
      <div className="page-content">
        <Header header="Календарь" />
        <Card
          body
          className="my-2"
          style={{ width: '30em' }}
        >
          <CardForContentTitle title="Вычисление даты" />
          <Label for="startDate">Дата начала отсчета</Label>
          <Input className="single-date-input" name="startDate" type="date" />
          <Label for="days">Количество дней</Label>
          <Input className="days-input" name="days" type="number" placeholder="0" />
          <FormGroup>
            <Input
              name="workingDays"
              type="checkbox"
              value
              className="checkbox"
            />
            {' '}
            <Label>
              Только рабочие дни
            </Label>
          </FormGroup>
          <SubmitButton text="Вычислить" />
          <hr />
          <Result text="Дата: " />
        </Card>
      </div>
      <Blob shapeOption="a" colorOption="yellow" position={{ right: '-23em', top: '10em' }} />
      <Blob shapeOption="b" colorOption="purple" sizeOption="big" position={{ right: '23em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="pink" sizeOption="small" position={{ right: '20em', top: '-35em' }} />
    </div>
  );
}
