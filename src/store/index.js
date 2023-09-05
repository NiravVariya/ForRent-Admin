import { configureStore } from "@reduxjs/toolkit";

import { createSlice } from "@reduxjs/toolkit";

import en from "../../public/locales/en/common.json";

import ar from "../../public/locales/ar/common.json";


const initialState = {
  en: en,

  ar: ar,
};

export const iconslice = createSlice({
  name: "aboutAPP",

  initialState,

  reducers: {
    setEnglishTrans: (state, action) => {
      state.en = action.payload;
    },

    setArabicTrans: (state, action) => {
      state.ar = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    icon: iconslice.reducer,

  },
});

export default store;

export const { setEnglishTrans, setArabicTrans } = iconslice.actions;
