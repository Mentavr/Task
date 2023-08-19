import _ from "lodash"
import { createSlice } from '@reduxjs/toolkit';



const initialState = { store: [], connect: 'close'};

const eventSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {
      addEvents: (state, {payload}) => {
        console.log('payload', payload)
        const sortStor = _.uniqBy(state.store)
        console.log('sortStor ========>>>>>>', sortStor)
        return state = {store: [payload, ...sortStor ]}
      },
      setConnectEvents: (state, {payload}) => {
        return state = {...state, connect: payload}
      }
    },
});

export const storeSlector = (state) => state.eventStore.store;
export const connectSelector = (state) => state.eventStore.connect;

console.log(connectSelector)
export const { addEvents, setConnectEvents } = eventSlice.actions;

export default eventSlice.reducer;
