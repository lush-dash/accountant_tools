import { SET_WORKING_DAYS } from '../types';

export default function currencyResultReducer(state = null, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_WORKING_DAYS:
      return payload;
    default:
      return state;
  }
}
