import React from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** import child components */
import { ProductImage } from '../ProductImage/ProductImage';

/** import interface */
import { ProductProps } from '../../../shared/model/core.component.model';

/** import custom hooks */
import { useCurrencyFormat } from '../../../hooks/useCurrencyFormat';

/** primary UI component */
export const ProductItem = ({ id, title, price, image, category, url, isCategoryVisible }: ProductProps) => {
  return (
    <div key={id} className="relative group">
      <a className={classNames([
        'block w-full px-8 py-8 overflow-hidden bg-white border border-gray-300 rounded-md min-h-80',
        'aspect-w-1 aspect-h-1 group-hover:opacity-75 h-80 lg:aspect-none'
      ])}>
        <ProductImage imageAlt={title} imagePath={image} />
      </a>

      <div className="flex justify-between mt-4">
        <div className='pr-2'>
          <h3 className="text-sm text-gray-700">
            <a href={url}>
              <span aria-hidden="true" className="absolute inset-0" />
              {title}
            </a>
          </h3>
          {isCategoryVisible && <p className="mt-1 text-sm text-gray-500 capitalize">{category}</p>}
        </div>
        <p className="text-sm font-medium text-gray-900">{useCurrencyFormat(price)}</p>
      </div>
    </div>
  );
};
