import React from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** import to get image path */
import { Images } from '../../../../shared/util/images';

/** import interface */
import { HeroBannerProps } from '../../../../shared/model/core.component.model';

/** primary UI component */
export const ParallaxBanner = ({
  heading,
  subHeading,
  content,
}: HeroBannerProps) => {
  return (
    <div className="relative flex flex-col w-full">
      <img
        src={Images.PARALLEX}
        className={'h-full w-full object-cover object-center fixed top-0 bottom-0 left-0 right-0 z-0 opacity-80'}
      />
      <div className={classNames([
        'relative top-0 bottom-0 left-0 right-0 z-10 flex items-center w-full max-w-2xl px-4 py-8 mx-auto border-b',
        'border-gray-300 sm:py-24 lg:py-40 sm:px-6 lg:max-w-7xl lg:px-20 sm:border-none'
      ])}>
        <div className="w-1/2 sm:text-center">
          <h2 className="flex flex-col text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-3xl md:text-6xl">
            <span className="block mb-4 text-green-200 xl:inline">{heading}</span>
            <span className="block xl:inline sm:opacity-40">{subHeading}</span>
          </h2>
          <p className={classNames([
              'mt-3 text-base font-bold text-center text-orange sm:mt-5 sm:text-lg',
              'sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'
            ])}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};
