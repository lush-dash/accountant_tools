import { CLEAR_CURRENCY_RESULT, SET_CURRENCY_RESULT } from '../types';

export const setCurrencyResult = (payload) => ({ type: SET_CURRENCY_RESULT, payload });
export const clearCurrencyResult = () => ({ type: CLEAR_CURRENCY_RESULT });
