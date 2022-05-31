import React from 'react';

/** import to get seo content */
import { SEO } from '../../shared/util/seo';

/** import child components */
import { Wrapper } from '../../components/layout';

/** primary UI component */
export const ErrorContainer = () => {
  return (
    <Wrapper pageTitle={SEO.PageTitle.ErrorPage}>
      <div
        className="flex items-center justify-center w-screen min-h-screen px-4 bg-gradient-to-r from-green-600 to-blue-400"
      >
        <div className="w-full px-20 py-10 bg-white rounded-md shadow-xl sm:w-auto lg:px-40 lg:py-20">
          <div className="flex flex-col items-center">
            <h1 className="font-bold text-blue-600 text-9xl">404</h1>

            <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span> Page not found
            </h6>

            <p className="mb-8 text-center text-gray-500 md:text-lg">The page you’re looking for doesn’t exist.</p>

            <a href="/" className="px-6 py-2 font-semibold uppercase text-l text-orange">
              Go home
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
