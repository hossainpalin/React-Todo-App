import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/button.module.scss';

function Button({
  children, type, className, ...rest
}) {
  return (
    <button className={`${Styles.button} ${className} flex flex-row-center`} type={type === 'submit' ? 'submit' : 'button'} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  className: PropTypes.string,
  rest: PropTypes.node,
};

export default Button;
