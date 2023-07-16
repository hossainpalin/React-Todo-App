import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { BiPlusCircle } from 'react-icons/bi';
import { FiArrowUpCircle } from 'react-icons/fi';
import './addTodo.min.css';

function AddTodo({
  todos, setTodos, todoInput, setTodoInput, toggleButton, setToggleButton, todoEdit,
}) {
  console.log('Add Todo component rendering...');
  // Input Validation
  const textInput = useRef(null);
  useEffect(() => {
    textInput.current.focus();
    if (todoInput.length > 35) {
      textInput.current.style.borderColor = '#df3737';
    } else {
      textInput.current.style.borderColor = null;
    }
  }, [todoInput]);

  // Generate unique key ids
  const uniqueId = Math.random().toString(16).slice(2, 12);

  // Todo time create
  const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const date = new Date();
  const currentTime = new Date().toLocaleTimeString();
  const currentMonth = month[date.getMonth()];
  const currentDay = date.getDate();
  const currentYear = date.getFullYear();
  const todoTime = `${currentTime} | ${currentMonth} ${currentDay}, ${currentYear}`;

  // Update todo input value
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  // Todo value send to TodoApp
  const handleSubmit = () => {
    setTodos([...todos, { title: todoInput, time: todoTime, id: uniqueId }]);

    // Todo value edit and update
    if (todoInput && !toggleButton) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === todoEdit) {
            return { ...todo, title: todoInput };
          }
          return todo;
        }),
      );
    }

    // After update input value clear
    setTodoInput('');

    // Toggle todo add button
    setToggleButton(true);
  };

  return (
    <div className="add-todo-container flex flex-row-center">
      <div className="add-todo flex justify-space-between">
        <input type="text" autoComplete="off" placeholder="Type here..." value={todoInput} onChange={handleChange} ref={textInput} />
        <button type="button" onClick={handleSubmit} disabled={todoInput.length === 0 || todoInput.length > 35}>
          {toggleButton ? <BiPlusCircle /> : <FiArrowUpCircle />}
        </button>
      </div>
    </div>
  );
}

AddTodo.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  todoInput: PropTypes.string.isRequired,
  setTodoInput: PropTypes.func.isRequired,
  toggleButton: PropTypes.bool.isRequired,
  setToggleButton: PropTypes.func.isRequired,
  todoEdit: PropTypes.string.isRequired,
};

export default AddTodo;
