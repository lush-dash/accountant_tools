import dayjs from 'dayjs';
import { CLEAR_DATE, SET_DATE } from '../types';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setDate = (payload) => ({ type: SET_DATE, payload });
export const clearDate = () => ({ type: CLEAR_DATE });

export const findDateThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    const { startDate, days, startDateIncluded } = data;
    const numberOfDays = startDateIncluded ? Number(days) : Number(days) - 1;
    const date = dayjs(startDate).add(numberOfDays, 'day').format('DD.MM.YYYY').toString();
    dispatch(setDate(date));
  } catch (error) { console.log(error); } finally { dispatch(closeLoader()); }
};
