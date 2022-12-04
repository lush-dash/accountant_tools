import { configureStore } from '@reduxjs/toolkit';
import currencyResultReducer from './reducers/currencyResultReducer';
import workingDaysReducer from './reducers/workingDaysReducer';
import resultsLoaderReducer from './reducers/resultsLoaderReducer';

export default configureStore({
  reducer: {
    currencyResult: currencyResultReducer,
    workingDays: workingDaysReducer,
    resultsLoader: resultsLoaderReducer,
  },
});
