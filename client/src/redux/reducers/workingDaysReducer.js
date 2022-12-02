import { CLEAR_WORKING_DAYS, SET_WORKING_DAYS } from '../types';

export default function currencyResultReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_WORKING_DAYS:
      return payload;
    case CLEAR_WORKING_DAYS:
      return '';
    default:
      return state;
  }
}
