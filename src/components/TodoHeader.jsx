import React from 'react';
import TodoIcon from '../assets/todo-icon.png';
import Styles from '../styles/modules/todoHeader.module.scss';

function TodoHeader() {
  return (
    <div className={`${Styles.header} flex flex-row-start`}>

      {/* Todo icon here */}
      <div className={Styles.icon}>
        <img src={TodoIcon} alt="TodoIcon" />
      </div>

      {/* Todo title here */}
      <div className={Styles.title}>
        <h1>React Todo App</h1>
        <p>
          <span>Version 1.0.0</span>
        </p>
      </div>

    </div>
  );
}

export default TodoHeader;
