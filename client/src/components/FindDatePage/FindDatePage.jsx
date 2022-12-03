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
          {/* Сделать больше расстояние 8px->16px, в WorkingDays схлопнуть c 2em */}
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
      {/* Переставить блобз */}
      <Blob shapeOption="a" colorOption="pink" position={{ right: '23em', top: '1em' }} />
      <Blob shapeOption="b" colorOption="yellow" sizeOption="big" position={{ right: '-15em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="purple" sizeOption="small" position={{ right: '-23em', top: '-35em' }} />
    </div>
  );
}
