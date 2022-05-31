import React from 'react';
import { Helmet } from 'react-helmet-async';

interface PageTitleProps {
  pageTitle?: string;
  metaDescription?: string;
}

/** primary UI component */
export const PageTitle: React.FC<PageTitleProps> = ({ pageTitle, metaDescription }) => {
  return (
    <div>
      <Helmet>
        {/* title attributes and value */}
        {pageTitle && <title>{pageTitle}</title>}

        {/* multiple meta elements */}
        {metaDescription && <meta name="description" content={metaDescription} />}
      </Helmet>
    </div>
  );
};
