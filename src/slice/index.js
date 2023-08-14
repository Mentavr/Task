import { configureStore } from '@reduxjs/toolkit';
import apiDataSlice from './apiDataSlice';
import eventStoreSlice from './eventStoreSlice';

const store = configureStore({
    reducer: {
        apiData: apiDataSlice,
        eventStore: eventStoreSlice,
    },
  });
  
  export default store;