import React from 'react';

/** import child components */
import { ProductItem } from '../ProductItem/ProductItem';
import { SpinIcon } from '../Icons/Icons';

/** import interface */
import { ProductListProps } from '../../../shared/model/core.component.model';

export const ProductList = ({ 
  productData,
  heading,
  isCategoryVisible,
  execptionalId,
  limitation,
  inerLoader=false 
}: ProductListProps) => {
  
  return (
    <section className="relative z-10 flex w-full bg-white">
      <div className="w-full max-w-2xl px-4 py-16 mx-auto sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        {/** component heading */}
        {heading && (
          <div className="flex flex-col w-full">
            <h2 className="mb-2 text-2xl font-extrabold text-gray-700">{heading}</h2>
            <div className="w-24 h-1 mb-4 rounded-md bg-orange" />
          </div>
        )}
        {/** inline loader */}
        {
          !productData && inerLoader && (
            <div className='flex justify-center w-full mt-8 opacity-50'>
                <SpinIcon />
                <span className='ml-2 text-xl'>Loading...</span>
            </div>
          )
        }
        {/** product data object mapping */}
        {
          productData && (
            <div className="grid grid-cols-1 mt-6 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                {productData.slice(0, limitation ? limitation : productData.length).map((productItem: any, index: string) => {
                  return (
                    execptionalId !== productItem.id && (
                    <ProductItem
                      id={productItem.id}
                      title={productItem.title}
                      price={productItem.price}
                      category={productItem.category}
                      image={productItem.image}
                      key={index}
                      isCategoryVisible={isCategoryVisible}
                      url={`/product/${productItem.id}`}
                    />
                    )
                  )
                })}
            </div>
          )
        }
      </div>
    </section>
  );
};
