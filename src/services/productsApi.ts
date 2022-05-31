import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configs } from '../shared/config/config';

const BASE_URL = configs.BASE_URL;

export const productsApi = createApi({
  reducerPath: 'productsApi',
  tagTypes: ['Products'],
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: (category) => ({
        url: `products/category/${category}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `products/${id}`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getAllProducts: builder.query({
      query: () => ({
        url: `products`,
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductQuery,
  useGetAllProductsQuery
} = productsApi;
