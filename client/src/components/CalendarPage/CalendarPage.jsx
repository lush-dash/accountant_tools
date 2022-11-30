import React from 'react';
// import Calendar from 'react-calendar';
import {
  Card,
  CardTitle,
  Form,
  Input,
} from 'reactstrap';
import dayjs from 'dayjs';
import { useDispatch } from 'react-redux';
import Header from '../Header/Header';
import ResultWorkingDays from '../ResultWorkingDays/ResultWorkingDays';
import SubmitButton from '../SubmitButton/SubmitButton';
// import 'react-calendar/dist/Calendar.css';
import './index.css';
import { setWorkingDaysThunk } from '../../redux/actions/workingDaysActions';

export default function CalendarPage() {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <div className="page-content">
        <Header header="Календарь" />
        {/* <Calendar /> */}
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
    </div>
  );
}
