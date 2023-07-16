import PropTypes from 'prop-types';
import React from 'react';
import { TbClipboardText } from 'react-icons/tb';
import Todo from '../todo/Todo';
import './todoList.scss';

function TodoList({
  todos, setTodos, todoInput, setTodoInput, setToggleButton,
  setTodoEdit, completedTodos, setCompletedTodos, toggleTab,
}) {
  const arr = [null, todos, completedTodos];
  return (
    <div className="todos-container">
      {/* Todo list Show */}
      <div className={todos.length === 0 ? 'not-yet-inactive' : 'not-yet-active'}>
        {arr[toggleTab].map(({ title, time, id }) => (
          <Todo
            title={title}
            time={time}
            id={id}
            key={id}
            todos={todos}
            setTodos={setTodos}
            todoInput={todoInput}
            setTodoInput={setTodoInput}
            setToggleButton={setToggleButton}
            setTodoEdit={setTodoEdit}
            completedTodos={completedTodos}
            setCompletedTodos={setCompletedTodos}
          />
        ))}
      </div>
      {/* Not yet Show */}
      <div className={todos.length === 0 && completedTodos.length === 0 ? 'not-yet-active' : 'not-yet-inactive'}>
        <div className="no-todo-alert flex flex-col-center">
          <TbClipboardText className="icon" />
          <p className="text">
            Try starting some tasks
            <br />
            to see them here
          </p>
        </div>
      </div>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  todoInput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
  setToggleButton: PropTypes.func.isRequired,
  setTodoEdit: PropTypes.func.isRequired,
  completedTodos: PropTypes.array.isRequired,
  setCompletedTodos: PropTypes.func.isRequired,
  toggleTab: PropTypes.number.isRequired,

};

export default TodoList;
