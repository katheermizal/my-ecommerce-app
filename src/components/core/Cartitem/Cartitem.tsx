import React from 'react';

/** import interface */
import { CartitemProps } from '../../../shared/model/core.component.model';

/** import child components */
import { ProductImage } from '../ProductImage/ProductImage';

/** import custom hooks */
import { useCurrencyFormat } from '../../../hooks/useCurrencyFormat';

/** primary UI component */
export const Cartitem = ({ price, title, image, url, id, subTotal, quantity }: CartitemProps) => {
  return (
    <div className="flex items-center justify-between pt-6 mt-6 border-t">
      <div className="flex items-center">
        <a className="block w-16 lg:w-32" href={url}>
          <ProductImage imageAlt={title} imagePath={image} />
        </a>

        <div className="flex flex-col ml-3 lg:pr-8">
          <span className="w-auto text-sm font-medium lg:text-md xl:text-xl">{title}</span>
          <span className="text-xs font-medium text-gray-500 lg:text-md xl:text-lg">{price}</span>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex pr-4 text-xs font-medium text-gray-500 lg:text-lg lg:pr-24">
          <span className="whitespace-nowrap">Qty: {quantity}</span>
        </div>

        <div className="pr-4 lg:pr-8">
          <span className="text-xs font-medium lg:text-md xl:text-lg">{useCurrencyFormat(subTotal)}</span>
        </div>
      </div>
    </div>
  );
};
