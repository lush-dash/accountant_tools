import { CLEAR_DATE, SET_DATE } from '../types';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setDate = (payload) => ({ type: SET_DATE, payload });
export const clearDate = () => ({ type: CLEAR_DATE });

export const findDateThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    console.log(data, 'action');
    const result = 'some date';
    dispatch(setDate(result));
  } catch (error) { console.log(error); } finally { dispatch(closeLoader()); }
};
