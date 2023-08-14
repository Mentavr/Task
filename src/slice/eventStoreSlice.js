import { createSlice } from '@reduxjs/toolkit';



const initialState = { store: [] };

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
      addEvents: (state, {payload}) => {
        return state = {store: [payload, ...state.store]}
      }
    },
});

export const storeSlector = (state) => state.eventStore.store;

export const { addEvents } = eventSlice.actions;

export default eventSlice.reducer;
