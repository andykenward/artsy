// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom/extend-expect';
// this will ensure they're removed after each test.
import '@testing-library/react/cleanup-after-each';
import 'jest-styled-components';

export default undefined;
