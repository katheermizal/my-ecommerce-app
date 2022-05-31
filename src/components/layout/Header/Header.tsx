import React, { useState } from 'react';

/** import dependency packages */
import classNames from 'classnames';

/** call custom components */
import { MenuIcon, MenuCollapseIcon, Logo, MiniCart } from '../../core';
import { Navigation } from '../Navigation/Navigation';

/** call custom hooks */
import { useComponentVisible } from '../../../hooks/useComponentVisible';

/** primary UI component */
export const Header = () => {
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);

  return (
    <header className={
      classNames([
        'fixed top-0 left-0 right-0 z-40 flex items-center justify-between py-5 pl-4 pr-4 text-sm font-medium',
        'leading-6 bg-white shadow-sm ring-1 ring-gray-900 ring-opacity-5 lg:pl-6 lg:pr-8'
      ])
    }>
      {/** logo */}
      <Logo />
      <div className="flex">
        {/** desktop menu */}
        <div className="hidden lg:flex">
          <Navigation />
        </div>
        {/** mini cart index */}
        <MiniCart />
        {/** mobile menu */}
        <div className="lg:hidden" ref={ref}>
          <div className="ml-4 cursor-pointer lg:hidden" onClick={() => setIsComponentVisible(!isComponentVisible)}>
            {isComponentVisible ? <MenuCollapseIcon /> : <MenuIcon />}
          </div>
          {isComponentVisible && (
            <Navigation />
          )}
        </div>
      </div>
    </header>
  );
};
