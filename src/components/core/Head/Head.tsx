import React from 'react';

/** import dependency packages */
import { Helmet } from 'react-helmet-async';

/** primary render component */
const Head = () => {
  return (
    <>
      <Helmet defaultTitle="Payer Dashboard">
        {/* html attributes */}
        <html lang="en" />

        {/* body attributes */}
        <body className="box-border p-0 m-0 font-sans" />
      </Helmet>
    </>
  );
};

export default Head;
