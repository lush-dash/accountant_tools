import React, { useEffect } from 'react';
import {
  Card, CardTitle, Form, Input,
} from 'reactstrap';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import ResultWorkingDays from '../ResultWorkingDays/ResultWorkingDays';
import SubmitButton from '../SubmitButton/SubmitButton';
import './index.css';
import { clearWorkingDays, setWorkingDaysThunk } from '../../redux/actions/workingDaysActions';
import Blob from '../Blob/Blob';

export default function CalendarPage() {
  const dispatch = useDispatch();

  useEffect(() => () => {
    dispatch(clearWorkingDays());
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
          <CardTitle tag="h5">
            Подсчет рабочих дней в выбранный период
          </CardTitle>
          <Form onSubmit={(e) => {
            e.preventDefault();
            const data = Object.fromEntries(new FormData(e.target));
            const dates = {
              startDate: dayjs(data.startDate).format('YYYYMMDD'),
              endDate: dayjs(data.endDate).format('YYYYMMDD'),
            };
            dispatch(setWorkingDaysThunk(dates));
          }}
          >
            <div className="inputs-container">
              <Input name="startDate" type="date" />
              <Input name="endDate" type="date" />
            </div>
            <div className="button-container">
              <SubmitButton text="Подсчитать" />
            </div>
          </Form>
          <hr />
          <ResultWorkingDays />
        </Card>
      </div>
      <Blob shapeOption="a" colorOption="pink" position={{ right: '23em', top: '1em' }} />
      <Blob shapeOption="b" colorOption="yellow" sizeOption="big" position={{ right: '-15em', top: '1em' }} />
      <Blob shapeOption="c" colorOption="purple" sizeOption="small" position={{ right: '-23em', top: '-35em' }} />
    </div>
  );
}
