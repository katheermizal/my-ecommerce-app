import React from 'react';

/** import to get image path */
import { Images } from '../../../shared/util/images';

/** import interface */
import { ProductImageProps } from '../../../shared/model/core.component.model';

/** primary UI component */
export const ProductImage = ({
  imageClasses = 'w-full h-full object-center object-contain lg:w-full lg:h-full',
  imagePath,
  imageAlt,
}: ProductImageProps) => {
  return (
    <>
      <img
        src={imagePath ? imagePath : Images.PLACEHOLDER}
        alt={imageAlt ? imageAlt : 'placeholder'}
        className={imageClasses}
      />
    </>
  );
};
