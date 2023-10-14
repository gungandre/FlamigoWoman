import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cekOngkirApi = createApi({
  reducerPath: "cekOngkirApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5171/" }),
  endpoints: (builder) => ({
    getProvince: builder.query({
      query: () => `province`,
    }),
  }),
});

export const { useGetProvinceQuery } = cekOngkirApi;
