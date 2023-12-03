import {configureStore} from "@reduxjs/toolkit";
import peopleSlice from "./slice/peopleSlice";

export const store = configureStore({
  reducer: {
    people: peopleSlice
  }
});
