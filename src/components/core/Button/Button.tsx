import React from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** import interface */
import { ButtonProps } from '../../../shared/model/core.component.model';

/** primary UI component */
export const Button = ({ label, onClick, isLinkType = false, linkUrl}: ButtonProps) => {
  /** handle button classses */
  const handleClass = [
    'flex items-center justify-center w-full px-4 py-3 text-base font-medium text-white border',
    'border-transparent rounded-md hover:bg-gray-600 md:text-lg',
    'bg-orange focus:outline-none focus:ring-offset-2 focus:bg-orange'
  ];
  
  return (
    <>
      {isLinkType ? (
        <a
          href={linkUrl}
          className={classNames(handleClass)}
        >
          {label}
        </a>
      ) : (
        <button
          type="button"
          onClick={onClick}
          className={classNames(handleClass)}
        >
           {label} 
        </button>
      )}
    </>
  );
};
