import { CLEAR_CURRENCY_RESULT, SET_CURRENCY_RESULT } from '../types';

export default function currencyResultReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENCY_RESULT:
      return payload;
    case CLEAR_CURRENCY_RESULT:
      return '';
    default:
      return state;
  }
}
