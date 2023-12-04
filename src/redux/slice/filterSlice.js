import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  filterValue: '',
  pageCount: 1,
  filter: {
    value: 'all',
    filterProperty: 'all'
  }
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setPageCount(state, action) {
      state.pageCount = action.payload;
    },
  }
});

export const selectorFilter = state => state.filter;
export const { setFilter, setPageCount } = filterSlice.actions;
export default filterSlice.reducer;
