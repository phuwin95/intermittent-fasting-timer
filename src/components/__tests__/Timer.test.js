import React from 'react';
import { render } from '@testing-library/react';
import Timer from '../Timer';

describe('Timer', () => {
  it('should render', () => {
    const { getByText } = render(<Timer />);
    expect(getByText('12:00 the next day')).toBeInTheDocument();
  });
});
