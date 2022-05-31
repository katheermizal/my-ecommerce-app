import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { configs } from '../shared/config/config';
import { AddCartParams } from '../shared/model/cart.data.model';

const BASE_URL = configs.BASE_URL;

const cartApi = createApi({
 reducerPath: 'cartApi',
 baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
 endpoints: (builder) => ({
   addNewProduct: builder.mutation({
    query: (obj:AddCartParams) => ({
      url: `/carts`,
      method: 'POST',
      body: {
        userId: obj.userId,
        date: obj.date,
        products: [{productId:obj.productId, quantity:obj.quantity}]
      },
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
    }),
  }),
 }),
});

export { cartApi };