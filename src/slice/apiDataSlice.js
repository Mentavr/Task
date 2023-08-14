import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import routesApi from '../routes/rotestApi';

export const userData = createAsyncThunk('users/usersData', async (page = 0) => {
  const limit = 5;
    const dataPath = routesApi.list();
    const { data } = await axios.get(dataPath, {
      baseURL: 'https://test.relabs.ru',
      params: {
        limit,
        offset: 0 + limit * page,
      },
    });
    return data;
  });
  
  const initialState = { loadingStatus: 'idle', error: null, data: {items:[]} };
  const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
      removeUser:(state, {payload}) => {
        const newDataItems = state.data.items.filter((item) =>{
          return item.id !== payload;
        })
        return state = {...state, data: {...state.data, items: newDataItems}}
      },
    },
    extraReducers: (builder) => builder
      .addCase(userData.pending, (state) => ({
        ...state, loadingStatus: 'loading', error: null,
      }))
      .addCase(userData.fulfilled, (state, { payload }) => ({ ...state, loadingStatus: 'idle', error: null, data: payload }))
      .addCase(userData.rejected, (state, action) => ({ ...state, loadingStatus: 'failed', error: action.error })),
  });

  export const { removeUser } = dataSlice.actions;
  
  export const userDataSlicer = (state) => state.apiData.data.items;
  export default dataSlice.reducer;
