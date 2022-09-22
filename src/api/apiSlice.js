// ====================================================
// IMPORTS
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// ====================================================
// Instance

const api = {
  base: "https://v6.exchangerate-api.com/v6/382d555418b3e5f66981fc03",
};

// ====================================================
// Requests
export const API = createApi({
  reducerPath: "API",
  baseQuery: fetchBaseQuery({ baseUrl: api.base }),
  endpoints: (builder) => ({
    convertCurrency: builder.query({
      query: ({ from, to }) => `/pair/${from}/${to}`,
    }),
    getCodes: builder.query({
      query: () => `${api.base}/codes`,
    }),
  }),
});

export const { useConvertCurrencyQuery, useGetCodesQuery } = API;
