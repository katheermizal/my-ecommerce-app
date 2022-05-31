import React, {useState} from 'react';

/** import dependency packages */
import { useParams } from "react-router";

/** import Content object to get the wordings */
import { Content } from '../../../shared/util/content';

/** import child components */
import { Wrapper } from '../../../components/layout';
import { ProductList, LoadingSpinner } from '../../../components/core';
import { ProductInfo } from './Info/Info';

 /** handle data api request from redux_toolkit */
import { useGetProductQuery, useGetProductsQuery } from '../../../services/productsApi';

/** primary UI component */
export const ProductDetailContainer = () => {
  /** get id from the router param */
 const {id} = useParams();

 /** get particular product data according to the product_id */
 const { data, isLoading, isSuccess, isError } = useGetProductQuery(id);

 /** get related products data according to the category */
 const relatedproductsData = useGetProductsQuery(isSuccess && data.category);

  return (
    <Wrapper
      pageTitle={isSuccess && data.title}
      metaDescription={isSuccess && data.description}
      isServerError={isError}
    >
      {isLoading && <LoadingSpinner />}
      {isSuccess && (
       <>
        <ProductInfo
         title={data.title}
         price={data.price}
         category={data.category}
         description={data.description}
         image={data.image}
         id={data.id}
        />
        {/** Related product list */}
        <ProductList
          productData={relatedproductsData.data} 
          heading={Content.RelatedProductSectionHeading}
          execptionalId={data.id}
          limitation={4}
          inerLoader
        />
       </>
      )}
    </Wrapper>
  );
};

