import { configureStore } from '@reduxjs/toolkit';
import numberInWordsReducer from './reducers/numberInWordsReducer/numberInWordsReducer';
import workingDaysReducer from './reducers/workingDaysReducer';
import resultsLoaderReducer from './reducers/resultsLoaderReducer';
import dateReducer from './reducers/dateReducer';

export default configureStore({
  reducer: {
    numberInWords: numberInWordsReducer,
    workingDays: workingDaysReducer,
    resultsLoader: resultsLoaderReducer,
    date: dateReducer,
  },
});
