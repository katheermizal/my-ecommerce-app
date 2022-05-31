import React from 'react';

/** import interface */
import { ProductProps } from '../../../../shared/model/core.component.model';

/** primary UI component */
export const ProductDescription = ({ description }: ProductProps) => {
  return (
    <>
      <div className="flex flex-col w-full mt-8">
        <h2 className="mb-2 text-xl font-extrabold text-gray-700">Description</h2>
        <div className="w-24 h-1 mb-8 rounded-md bg-orange" />
      </div>
      <div className="space-y-6">
        <p className="text-base text-gray-900 lowercase">{description}</p>
      </div>
    </>
  );
};
