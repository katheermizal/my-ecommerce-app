import React from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** import to get image path */
import { Images } from '../../../../shared/util/images';

/** import child components */
import { HeroBannerProps } from '../../../../shared/model/core.component.model';
import { Button } from '../../Button/Button';

/** primary UI component */
export const HeroBanner = ({
  heading,
  linkText,
  linkUrl,
  subHeading,
  content,
}: HeroBannerProps) => {
  return (
    <div className="relative z-10 flex flex-col w-full lg:h-auto sm:h-96">
      <img src={Images.BANNER} className={'h-full w-full object-cover object-center'} />
      <div className={classNames([
        'top-0 bottom-0 left-0 right-0 flex items-center max-w-2xl px-4 py-8 mx-auto border-b',
        'border-gray-300 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8 sm:absolute sm:border-none'
      ])}>
        <div className="sm:text-center lg:text-left">
          <h1 className="flex flex-col text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-3xl md:text-6xl lg:text-left">
            <span className="block xl:inline">{heading}</span>
            <span className="block text-green-200 xl:inline sm:opacity-40">{subHeading}</span>
          </h1>
          <p className="mt-3 text-base text-center text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-left">
            {content}
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <Button isLinkType label={linkText} linkUrl={linkUrl} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
