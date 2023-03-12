import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk(
  'people/fetchDataStatus', async () => {
    const {data} = await axios.get(`https://swapi.dev/api/people`);
    return data;
  });

const initialState = {
  items: [],
  status: 'loading'
};

const dataSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setData(state, action)  {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchDataItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchDataItems.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
    },
    [fetchDataItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    }
  }
});

export const selectorData = state => state.people;
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
