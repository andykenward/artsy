import { Sans } from '@artsy/palette';
import React from 'react';

export const Error: React.FC<{ error?: Error }> = ({ error }) => {
  return (
    <>
      <Sans size="6">There was an error</Sans>
      <pre style={{ maxWidth: 700 }}>{JSON.stringify(error, null, 2)}</pre>
    </>
  );
};
