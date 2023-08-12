import React from 'react';
import { useSelector } from 'react-redux';
import Styles from '../styles/modules/todoContent.module.scss';
import NotYetTodo from './NotYetTodo';
import TodoList from './TodoList';

function TodoContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time));

  // Filter todo status
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const filteredTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === 'all') {
      return true;
    }
    return item.status === filterStatus;
  });

  return (
    <div className={Styles.todoContent}>
      {filteredTodoList && filteredTodoList.length > 0 ? (
        filteredTodoList.map((todo) => <TodoList key={todo.id} todo={todo} />)
      ) : <NotYetTodo />}
    </div>
  );
}

export default TodoContent;
