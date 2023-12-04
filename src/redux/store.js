import {configureStore} from "@reduxjs/toolkit";
import peopleSlice from "./slice/peopleSlice";
import filterSlice from './slice/filterSlice';

export const store = configureStore({
  reducer: {
    people: peopleSlice,
    filter: filterSlice,
  }
});
