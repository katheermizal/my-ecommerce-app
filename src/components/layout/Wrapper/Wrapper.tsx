import React, {useEffect} from 'react';

/** import Content object to get the wordings */
import { Content } from '../../../shared/util/content';

/** import child components */
import { PageTitle, Notifications } from '../../core';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

/** import interface */
import { WrapperProps } from '../../../shared/model/core.component.model';

/** primary UI component */
export const Wrapper = ({ pageTitle, metaDescription, children, isServerError,  ...rest }: WrapperProps) => {
  return (
    <main data-testid="wrapper">
      <PageTitle pageTitle={pageTitle} metaDescription={metaDescription} />
      <Header />
      <div className="min-h-screen pt-20" {...rest}>
        {isServerError && <Notifications message={Content.Notification.error} />}
        {children}
      </div>
      <Footer />
    </main>
  );
};
