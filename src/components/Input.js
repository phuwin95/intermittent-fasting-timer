import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ value, handleChange, type }) => (
  <input
    onChange={handleChange}
    type={type}
    value={value}
  />
);

Input.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  handleChange: PropTypes.func,
  type: PropTypes.string,
};

Input.defaultProps = {
  value: '',
  handleChange: () => {},
  type: 'text',
};


export default Input;
