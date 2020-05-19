import React from 'react';
import { render } from '@testing-library/react';
import Timer from '../Timer';

describe('Timer', () => {
  it('should render', () => {
    const { getByText, container } = render(<Timer />);
    expect(getByText('the next day')).toBeInTheDocument();
    expect(getByText('12:00')).toBeInTheDocument();
    expect(container.querySelector('input[type="time"]')).toBeInTheDocument();
    expect(container.querySelector('input[type="number"]')).toBeInTheDocument();
  });
});
