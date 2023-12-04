import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchDataItems = createAsyncThunk(
  'people/fetchDataStatus', async (params) => {
    let {currentPage} = params;
    const urlParams = currentPage > 1 ? `/?page=${currentPage}` : '';
    const {data} = await axios.get(`https://swapi.dev/api/people${urlParams}`);
    return data;
  });

const initialState = {
  items: [],
  cloneItems: [],
  status: 'loading'
};

const dataSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {
    setData(state, action)  {
      state.cloneItems.results = action.payload;
    },
  },
  extraReducers: {
    [fetchDataItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
      state.cloneItems = [];
    },
    [fetchDataItems.fulfilled]: (state, action) => {
      state.status = 'success';
      state.items = action.payload;
      state.cloneItems = action.payload;
    },
    [fetchDataItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
      state.cloneItems = [];
    }
  }
});

export const selectorData = state => state.people;
export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
