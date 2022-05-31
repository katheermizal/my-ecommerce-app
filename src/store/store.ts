import { configureStore } from '@reduxjs/toolkit';
import { productsApi } from '../services/productsApi';
import { categoryApi } from '../services/categoryApi';
import { cartApi } from '../services/cartApi';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [productsApi.reducerPath]: productsApi.reducer,
    [categoryApi.reducerPath]: categoryApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      categoryApi.middleware,
      cartApi.middleware
    ),
});
