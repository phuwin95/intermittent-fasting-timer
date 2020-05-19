import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Timer', () => {
  it('should render', () => {
    const { container } = render(<Input />);
    const input = container.querySelector('input');
    expect(input).toBeInTheDocument();
  });
  it('on change should run when input is changed', () => {
    const onChange = jest.fn();
    const { container } = render(<Input handleChange={onChange} value="3" />);
    const input = container.querySelector('input');
    fireEvent.change(input, { target: { value: 'a' } });
    expect(onChange).toHaveBeenCalled();
  });
  it('input value can be set by value prop', () => {
    const value = '13:00';
    const { container } = render(<Input value={value} handleChange={jest.fn()} />);
    const input = container.querySelector('input');
    expect(input.value).toEqual(value);
  });
});
