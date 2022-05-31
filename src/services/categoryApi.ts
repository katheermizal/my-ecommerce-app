import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configs } from '../shared/config/config';

const BASE_URL = configs.BASE_URL;

export const categoryApi = createApi({
  reducerPath: 'categoryApi',
  tagTypes: ['Category'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => ({
        url: `/products/categories`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery
} = categoryApi;