// ====================================================
// IMPORTS

import { createSlice } from "@reduxjs/toolkit";

// ====================================================
// Initial state

let initialState = {
  conversionRate: 0,
};

// ====================================================
// Reducer

export const dataSlice = createSlice({
  name: "currencyConverter",
  initialState,
  reducers: {
    setConversionResult: (state, action) => {
      state.conversionRate = action.payload.conversion_rate;
    },
  },
});

// ====================================================
// Exports

export const { setConversionResult } = dataSlice.actions;
export default dataSlice.reducer;
