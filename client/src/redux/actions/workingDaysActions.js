import axios from 'axios';
import { SET_WORKING_DAYS } from '../types';

export const setWorkingDays = (payload) => ({ type: SET_WORKING_DAYS, payload });

export const setWorkingDaysThunk = (dates) => (dispatch) => {
  axios.get(`https://isdayoff.ru/api/getdata?date1=${dates.startDate}&date2=${dates.endDate}&cc=ru&pre=1&delimeter=&covid=0&sd=0`).then((res) => {
    const str = JSON.stringify(res.data);
    const arr = str.split('');
    console.log(arr);
    const filteredArr = arr.filter((el) => el === '0' || el === '2');
    const result = JSON.stringify(filteredArr.length);
    dispatch(setWorkingDays(result));
  })
    .catch(console.log);
};
