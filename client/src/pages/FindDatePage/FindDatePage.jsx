import React from 'react';
import {
  Card, FormGroup, Input, Label,
} from 'reactstrap';
import Blob from '../../components/Blob/Blob';
import CardForContentTitle from '../../components/CardForContentTitle/CardForContentTitle';
import Header from '../../components/Header/Header';
import Result from '../../components/Result/Result';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import './index.css';

export default function FindDatePage() {
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
