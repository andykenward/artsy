import React from 'react';
import { Header } from '.';
import { renderWithTheme } from '../../utils/tests';

describe('<Header />', () => {
  it('renders correctly', () => {
    const { container } = renderWithTheme(<Header />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
