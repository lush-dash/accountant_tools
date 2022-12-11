import { CLEAR_NUMBER_IN_WORDS, SET_NUMBER_IN_WORDS } from '../types';
import convertToWords from '../utils/convertToWords/convertToWords';
import { openLoader, closeLoader } from './resultsLoaderActions';

export const setNumberInWords = (payload) => ({ type: SET_NUMBER_IN_WORDS, payload });
export const clearNumberInWords = () => ({ type: CLEAR_NUMBER_IN_WORDS });

export const setNumberInWordsThunk = (data) => async (dispatch) => {
  try {
    dispatch(openLoader());
    const result = await convertToWords(data);
    dispatch(setNumberInWords(result));
  } catch (error) { console.log(error); } finally { dispatch(closeLoader()); }
};
