import { configureStore } from '@reduxjs/toolkit';
import currencyResultReducer from './reducers/currencyResultReducer';

export default configureStore({
  reducer: {
    currencyResult: currencyResultReducer,
  },
});
