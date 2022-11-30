import axios from 'axios';
import { SET_WORKING_DAYS } from '../types';

export const setWorkingDays = (payload) => ({ type: SET_WORKING_DAYS, payload });

export const setWorkingDaysThunk = (dates) => (dispatch) => {
  axios.get(`https://isdayoff.ru/api/getdata?date1=${dates.startDate}&date2=${dates.endDate}&cc=ru&pre=1&delimeter=&covid=1&sd=0`).then((res) => {
    const arr = res.data.split('');
    const filteredArr = arr.filter((el) => el === '0');
    const result = filteredArr.length;
    dispatch(setWorkingDays(result));
  })
    .catch(console.log);
};
