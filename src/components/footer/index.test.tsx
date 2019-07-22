import React from 'react';
import { Footer } from '.';
import { renderWithTheme } from '../../utils/tests';

describe('<Footer />', () => {
  it('renders correctly', () => {
    const { container } = renderWithTheme(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
