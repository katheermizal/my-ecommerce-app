import React from 'react';

/** import dependency packages */
import { NavLink } from 'react-router-dom';

/** import Content object to get the wordings */
import { Content } from '../../../shared/util/content';

/** get navigation data */
import { useGetCategoriesQuery } from '../../../services/categoryApi';

/** primary UI component */
export const Navigation = () => {

  /** handle data request from redux_toolkit */
  const { data, isSuccess } = useGetCategoriesQuery('');

  return (
    <div className="fixed left-0 right-0 flex flex-col py-2 bg-white top-20 lg:relative lg:top-0 lg:flex-row lg:h-auto lg:py-0">
      <NavLink
        to={`/products/all`}
        style={({ isActive }) => ({
          color: isActive ? 'green' : '#6a6a6a',
          strokeWidth: isActive ? 2 : 1,
        })}
        className={
          'hover:text-gray-400 flex px-4 py-2 rounded-md text-base font-medium capitalize items-center lg:px-3 lg:py-0'
        }
      >
        {Content.Navigation.AllProductsMenuText}
      </NavLink>
      {/** map from api */}
      {isSuccess &&
        data?.map((navitem: string, index: any) => {
          return (
            <NavLink
              key={index}
              to={`/products/category/${navitem.replace(/\s+/g, '-').toLowerCase()}`}
              style={({ isActive }) => ({
                color: isActive ? 'green' : '#6a6a6a',
                strokeWidth: isActive ? 2 : 1,
              })}
              className={
                'hover:text-gray-400 flex px-4 py-2 rounded-md text-base font-medium capitalize items-center lg:px-3 lg:py-0'
              }
            >
              {navitem}
            </NavLink>
          );
        })}
    </div>
  );
};
