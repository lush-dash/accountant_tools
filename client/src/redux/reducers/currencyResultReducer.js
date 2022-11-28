import { SET_CURRENCY_RESULT } from '../types';

export default function currencyResultReducer(state = {}, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_CURRENCY_RESULT:
      return payload;
    default:
      return state;
  }
}
