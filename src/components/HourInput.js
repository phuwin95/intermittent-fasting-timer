import React from 'react';
import PropTypes from 'prop-types';

const HourInput = ({ value, onChange }) => (<input type="time" value={value} onChange={onChange} />);

HourInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default HourInput;
