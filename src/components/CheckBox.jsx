import { motion, useMotionValue, useTransform } from 'framer-motion';
import PropTypes from 'prop-types';
import React from 'react';
import Styles from '../styles/modules/checkedBox.module.scss';

const boxVariants = {
  checked: {
    background: 'var(--base-primary)',
    transition: { duration: 0.1 },
  },
  unchecked: { background: 'var(--layout-tertiary)', transition: { duration: 0.1 } },
};

const checkVariants = {
  initial: {
    color: '#dedede',
  },
  checked: { pathLength: 1 },
  unchecked: { pathLength: 0 },
};

function CheckBox({ checked, handleCheck }) {
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  return (
    <motion.div
      animate={checked ? 'checked' : 'unchecked'}
      className={`${Styles.checkBox} flex flex-row-center`}
      variants={boxVariants}
      onClick={() => handleCheck()}
    >
      <motion.svg
        className={Styles.svg}
        viewBox="0 0 53 38"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          variants={checkVariants}
          animate={checked ? 'checked' : 'unchecked'}
          style={{ pathLength, opacity }}
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="6"
          d="M1.5 22L16 36.5L51.5 1"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </motion.svg>
    </motion.div>
  );
}

CheckBox.propTypes = {
  checked: PropTypes.bool,
  handleCheck: PropTypes.func,
};

export default CheckBox;
