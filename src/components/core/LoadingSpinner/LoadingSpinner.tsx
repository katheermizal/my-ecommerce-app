import React from 'react';

/** import dependency packages */
import ReactDOM from 'react-dom';
import classNames from 'classnames';

/** import child components */
import { SpinIcon } from '../Icons/Icons';

/** get root dom node */
const domNode: any = document.getElementById('loader-root');

/** primary UI component */
export const LoadingSpinner = () => {
  return ReactDOM.createPortal(
    <div className={classNames([
      'fixed top-0 bottom-0 left-0 right-0 flex items-center justify-center',
      'duration-300 ease-in-out text-black-900 bg-blackLight z-50'
    ])}>
      <SpinIcon />
    </div>,
    domNode
  );
};
