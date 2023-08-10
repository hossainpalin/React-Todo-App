import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/layout.module.scss';

function Layout({ children }) {
  return (
    <div className={`${Styles.layout} flex flex-row-center`}>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
