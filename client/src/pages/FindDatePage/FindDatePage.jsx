import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Card, Form, FormGroup, Input, Label,
} from 'reactstrap';
import Blob from '../../components/Blob/Blob';
import CardForContentTitle from '../../components/CardForContentTitle/CardForContentTitle';
import Header from '../../components/Header/Header';
import Result from '../../components/Result/Result';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import { clearDate, findDateThunk } from '../../redux/actions/dateActions';
import './index.css';

export default function FindDatePage() {
  const dispatch = useDispatch();
  const date = useSelector((state) => state.date);

  function submitHandler(e) {
    e.preventDefault();
    console.log(Object.fromEntries(new FormData(e.target)));
    dispatch(findDateThunk(Object.fromEntries(new FormData(e.target))));
  }

  useEffect(() => () => {
    dispatch(clearDate());
  }, []);

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
          <Form onSubmit={(e) => submitHandler(e)}>
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
                Считать только рабочие дни
              </Label>
            </FormGroup>
            <SubmitButton text="Вычислить" />
          </Form>
          <hr />
          <Result result={date} text="Дата: " />
        </Card>
      </div>
      <Blob shapeOption="a" colorOption="yellow" position={{ right: '-23em', top: '10em' }} />
      <Blob shapeOption="b" colorOption="purple" sizeOption="big" position={{ right: '23em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="pink" sizeOption="small" position={{ right: '20em', top: '-35em' }} />
    </div>
  );
}
