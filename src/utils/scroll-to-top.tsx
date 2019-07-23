import { RouteComponentProps } from '@reach/router';
import React, { useEffect } from 'react';

export const ScrollToTop: React.FC<RouteComponentProps> = ({
  children,
  location,
}) => {
  const { pathname } = location!;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
};
