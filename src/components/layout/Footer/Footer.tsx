import React from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** import Content object to get the wordings */
import { Content } from '../../../shared/util/content';

/** import child components */
export const Footer = () => {
  return (
    <footer className={classNames([
      'w-full bg-white relative z-10 max-w-container mx-auto border-t py-10 text-center',
      'text-sm text-gray-500 sm:flex sm:items-center sm:justify-center'
    ])}>
      <p>{Content.Footer.copyright}</p>
      <p className="mt-2 sm:mt-0 sm:ml-3 sm:border-l sm:border-gray-200 sm:pl-3">
        <a className="hover:text-teal-600" href="/#">
          {Content.Footer.LinkText}
        </a>
      </p>
    </footer>
  );
};
