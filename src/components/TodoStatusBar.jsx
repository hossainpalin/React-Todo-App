import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterStatus } from '../features/todoSlice';
import Styles from '../styles/modules/todoStatusBar.module.scss';
import Button from './Button';

function TodoStatusBar() {
  const [toggle, setToggle] = useState(0);
  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todo.todoList);

  // Todo lenght filter
  const pendingTodoList = todo.filter((item) => item.status === 'pending');
  const completeTodoList = todo.filter((item) => item.status === 'complete');

  // Handle toggle function
  const handleToggle = (value) => {
    setToggle(value);
  };

  // Handle status function
  const handleStatus = (value) => {
    dispatch(updateFilterStatus(value));
  };

  return (
    <div className={`${Styles.statusBar} flex flex-row-start`}>

      {/* Filter button all here */}
      <Button className={toggle === 0 ? Styles.toggleActive : null} onClick={() => { handleStatus('all'); handleToggle(0); }}>All</Button>
      <span className={`${Styles.span} ${todo.length > 0 ? Styles.active : Styles.inactive} flex flex-row-center`}>
        {todo.length}
      </span>

      {/* Filter button pending here */}
      <Button className={toggle === 1 ? Styles.toggleActive : null} onClick={() => { handleStatus('pending'); handleToggle(1); }}>Pending</Button>
      <span className={`${Styles.span} ${pendingTodoList.length > 0 ? Styles.active : Styles.inactive} flex flex-row-center`}>
        {pendingTodoList.length}
      </span>

      {/* Filter button complete here */}
      <Button className={toggle === 2 ? Styles.toggleActive : null} onClick={() => { handleStatus('complete'); handleToggle(2); }}>Complete</Button>
      <span className={`${Styles.span} ${completeTodoList.length > 0 ? Styles.active : Styles.inactive} flex flex-row-center`}>
        {completeTodoList.length}
      </span>

    </div>
  );
}

export default TodoStatusBar;
