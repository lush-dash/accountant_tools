import { CLEAR_DATE, SET_DATE } from '../types';

export default function dateReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATE:
      return payload;
    case CLEAR_DATE:
      return '';
    default:
      return state;
  }
}
