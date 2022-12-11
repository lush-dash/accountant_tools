import { configureStore } from '@reduxjs/toolkit';
import numberInWordsReducer from './reducers/numberInWordsReducer';
import workingDaysReducer from './reducers/workingDaysReducer';
import resultsLoaderReducer from './reducers/resultsLoaderReducer';

export default configureStore({
  reducer: {
    numberInWords: numberInWordsReducer,
    workingDays: workingDaysReducer,
    resultsLoader: resultsLoaderReducer,
  },
});
