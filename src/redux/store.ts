import { configureStore } from "@reduxjs/toolkit";
import { iconslice } from "./languageSlice";

const store = configureStore({
  reducer: {
    icon: iconslice.reducer,
  },
});

export default store;
