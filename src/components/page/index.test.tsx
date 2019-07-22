import React from 'react';
import { Page } from '.';
import { renderWithTheme } from '../../utils/tests';

describe('<Page />', () => {
  it('renders correctly', () => {
    const { container } = renderWithTheme(<Page />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with children', () => {
    const { container, getByText } = renderWithTheme(<Page>Hello World</Page>);
    expect(getByText('Hello World')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
