import { configureStore } from '@reduxjs/toolkit';
import currencyResultReducer from './reducers/currencyResultReducer';
import workingDaysReducer from './reducers/workingDaysReducer';

export default configureStore({
  reducer: {
    currencyResult: currencyResultReducer,
    workingDays: workingDaysReducer,
  },
});
