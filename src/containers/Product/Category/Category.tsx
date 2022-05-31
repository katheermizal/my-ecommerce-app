import React from 'react';

/** import dependency packages */
import { useParams } from "react-router";

/** import child components */
import { Wrapper } from '../../../components/layout';
import { ProductList, LoadingSpinner } from '../../../components/core';

 /** handle data api request from redux_toolkit */
import { useGetProductsQuery } from '../../../services/productsApi';

/** primary UI component */
export const ProductCategoryContainer = () => {
  /** get router parameter value */
  const category:any = useParams();
  const setPageTitle = category.category.toUpperCase(); // set page title to constant
  const getParams = category.category.replace(/-/g, " "); // use to send in payload to request the products

  /** get products data according to the category */
  const { data, isLoading, isSuccess, isError } = useGetProductsQuery(getParams);

  return (
    <Wrapper
      pageTitle={isSuccess && setPageTitle}
      metaDescription={isSuccess && setPageTitle}
      isServerError={isError}
    >
      {isLoading && <LoadingSpinner />}
      {isSuccess && <ProductList productData={data} heading={setPageTitle} />}
    </Wrapper>
  );
};
