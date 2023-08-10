import React from 'react';
import { TbClipboardText } from 'react-icons/tb';
import Styles from '../styles/modules/notYetTodo.module.scss';

function NotYetTodo() {
  return (
    <div className={`${Styles.notYetTodo} flex flex-row-center`}>
      <div className={`${Styles.items} flex flex-col-center`}>
        <TbClipboardText className={Styles.icon} />
        <p className={Styles.text}>
          Try starting some tasks
          <br />
          to see them here
        </p>
      </div>
    </div>
  );
}
export default NotYetTodo;
