import dayjs from 'dayjs';
import { CLEAR_DATE, SET_DATE } from '../types';
import findDate from '../utils/findDate/findDate';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setDate = (payload) => ({ type: SET_DATE, payload });
export const clearDate = () => ({ type: CLEAR_DATE });

export const findDateThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    const date = await findDate(data);
    dispatch(setDate(dayjs(date).format('DD.MM.YYYY')));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(closeLoader());
  }
};
