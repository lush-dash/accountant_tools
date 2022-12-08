import { CLEAR_CURRENCY_RESULT, SET_CURRENCY_RESULT } from '../types';
import countCurrencyResult from '../utils/currencyResult';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setCurrencyResult = (payload) => ({ type: SET_CURRENCY_RESULT, payload });
export const clearCurrencyResult = () => ({ type: CLEAR_CURRENCY_RESULT });

export const setCurrencyResultThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    const result = await countCurrencyResult(data);
    dispatch(setCurrencyResult(result));
  } catch (error) { console.log(error); } finally { dispatch(closeLoader()); }
};
