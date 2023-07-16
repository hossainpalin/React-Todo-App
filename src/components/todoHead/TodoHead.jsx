import React from 'react';
import TodoIcon from '../../../public/todo-icon.png';
import './todoHead.min.css';

function TodoHead() {
  console.log('Todo Head component rendering...');
  return (
    <div className="todo-head flex flex-row-start">
      <div className="todo-logo">
        <img src={TodoIcon} alt="Todo Icon" />
      </div>
      <div className="todo-app-name">
        <h1>React Todo App</h1>
        <p>
          <span>Last update: June 14, 2023</span>
          {' '}
          |
          {' '}
          <span>Version 1.0.0</span>
        </p>
      </div>
    </div>
  );
}

export default TodoHead;
