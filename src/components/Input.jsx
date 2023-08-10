import PropTypes from 'prop-types';
import React from 'react';

function Input({ type, ...rest }) {
  return (
    <input type={type === 'checkbox' ? 'checkbox' : 'text'} {...rest} />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  rest: PropTypes.node,
};

export default Input;
