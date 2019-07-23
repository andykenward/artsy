import { Sans } from '@artsy/palette';
import React from 'react';
import { FallbackProps } from 'react-error-boundary';

export const Error: React.FC<FallbackProps> = ({ error }) => {
  return (
    <>
      <Sans size="6">There was an error</Sans>
      <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
};
