import axios from 'axios';
import dayjs from 'dayjs';
import { CLEAR_WORKING_DAYS, SET_WORKING_DAYS } from '../types';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setWorkingDays = (payload) => ({ type: SET_WORKING_DAYS, payload });
export const clearWorkingDays = () => ({ type: CLEAR_WORKING_DAYS });

export const setWorkingDaysThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    const dates = {
      startDate: dayjs(data.startDate).format('YYYYMMDD'),
      endDate: dayjs(data.endDate).format('YYYYMMDD'),
    };
    const res = await axios.get(`https://isdayoff.ru/api/getdata?date1=${dates.startDate}&date2=${dates.endDate}&cc=ru&pre=1&delimeter=&covid=0&sd=0`);
    const str = JSON.stringify(res.data);
    const arr = str.split('');
    const filteredArr = arr.filter((el) => el === '0' || el === '2');
    const result = JSON.stringify(filteredArr.length);
    dispatch(setWorkingDays(result));
  } catch (e) {
    console.log(e);
  } finally {
    dispatch(closeLoader());
  }
};
