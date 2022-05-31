import React from 'react';

/** import Content object to get the wordings */
import { Content } from '../../shared/util/content';

/** import to get seo content */
import { SEO } from '../../shared/util/seo';

/** import child components */
import { Wrapper } from '../../components/layout';
import { ProductList, HeroBanner, ParallaxBanner } from '../../components/core';

 /** handle data api from redux_toolkit */
import { useGetAllProductsQuery, useGetProductsQuery } from '../../services/productsApi';

/** primary UI component */
export const HomeContainer = () => {
  /** get top collection product data*/
  const topCollectionData = useGetProductsQuery('jewelery');

  /** get all product data*/
  const allProductData = useGetAllProductsQuery('');

  return (
    <Wrapper
      pageTitle={SEO.PageTitle.HomePage}
      metaDescription={SEO.MetaDescription.HomePage}
    >
      {/** Main hero banner */}
      <HeroBanner 
        heading={Content.HeroBanner.heading}
        linkText={Content.HeroBanner.linkText}
        linkUrl={Content.HeroBanner.linkUrl}
        subHeading={Content.HeroBanner.subHeading}
        content={Content.HeroBanner.content}
      />
      {/** Top collection product block */}
      <ProductList
        productData={topCollectionData.data}
        heading={Content.TopCollectionHeading}
        limitation={4} 
        isCategoryVisible 
        inerLoader
      />
     {/** Middle parallax banner */}
      <ParallaxBanner 
        heading={Content.ParallaxBanner.heading}
        subHeading={Content.ParallaxBanner.subHeading}
        content={Content.ParallaxBanner.content}
      />
      {/** Most popular collection block */}
      <ProductList
        productData={allProductData.data}
        heading={Content.MostPopularCollectionHeading}
        limitation={8}
        isCategoryVisible 
        inerLoader
      />
    </Wrapper>
  );
};
