import { CLEAR_NUMBER_IN_WORDS, SET_NUMBER_IN_WORDS } from '../../types';

export default function numberInWordsReducer(state = '', action) {
  const { type, payload } = action;
  switch (type) {
    case SET_NUMBER_IN_WORDS:
      return payload;
    case CLEAR_NUMBER_IN_WORDS:
      return '';
    default:
      return state;
  }
}
