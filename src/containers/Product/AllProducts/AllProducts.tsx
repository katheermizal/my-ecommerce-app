import React from 'react';

/** import to get seo content */
import { SEO } from '../../../shared/util/seo';

/** import child components */
import { Wrapper } from '../../../components/layout';
import { ProductList, LoadingSpinner } from '../../../components/core';

 /** handle data api from redux_toolkit */
import { useGetAllProductsQuery } from '../../../services/productsApi';

/** primary UI component */
export const AllProductsContainer = () => {

  /** get all products data through the RTK query */
  const { data, isLoading, isSuccess, isError } = useGetAllProductsQuery('');

  return (
    <Wrapper
      pageTitle={SEO.PageTitle.AllProducts}
      metaDescription={SEO.MetaDescription.AllProducts}
      isServerError={isError}
    >
      {isLoading && <LoadingSpinner />}
      {isSuccess && <ProductList productData={data} heading={SEO.PageTitle.AllProducts} isCategoryVisible />}
    </Wrapper>
  );
};