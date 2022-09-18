import { configureStore } from '@reduxjs/toolkit';
import dataReducer from '../features/dataCenter/dataSlice';

export const store = configureStore({
  reducer: {
    dataCenter: dataReducer,
  },
});
