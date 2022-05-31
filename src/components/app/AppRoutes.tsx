import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../../pages/Home/Home';
import { ProductDetail } from '../../pages/Product/Detail/Detail';
import { ProductCategory } from '../../pages/Product/Category/Category';
import { Cart } from '../../pages/Cart/Cart';
import { Error } from '../../pages/Error/Error';
import { AllProducts } from '../../pages/Product/AllProducts/AllProducts';

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products/all" element={<AllProducts />} />
    <Route path="/products/category/:category" element={<ProductCategory />} />
    <Route path="/product/:id" element={<ProductDetail />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="*" element={<Error />} />
  </Routes>
);
