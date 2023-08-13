import { motion } from 'framer-motion';
import React from 'react';
import { TbClipboardText } from 'react-icons/tb';
import Styles from '../styles/modules/notYetTodo.module.scss';

// Framer motion
const noTaskAnimation = {
  hidden: { y: 15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function NotYetTodo() {
  return (
    <motion.div
      className={`${Styles.notYetTodo} flex flex-row-center`}
      variants={noTaskAnimation}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={`${Styles.items} flex flex-col-center`}>
        <TbClipboardText className={Styles.icon} />
        <p className={Styles.text}>
          Try starting some tasks
          <br />
          to see them here
        </p>
      </motion.div>
    </motion.div>
  );
}
export default NotYetTodo;
