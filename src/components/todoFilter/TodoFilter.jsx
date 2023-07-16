import PropTypes from 'prop-types';
import React from 'react';
import './todoFilter.min.css';

function TodoFilter({
  todos, toggleTab, setToggleTab, completedTodos,
}) {
  const isTabActive = (tadId) => {
    setToggleTab(tadId);
  };
  return (
    <div className="todo-status flex flex-row-start">
      <button className={todos.length >= 1 && toggleTab === 1 ? 'active' : null} type="button" onClick={() => isTabActive(1)}>Pending</button>
      <span className={`flex flex-row-center ${todos.length === 0 ? 'count-inactive' : 'count-active'}`}>
        {todos.length}
      </span>
      <button className={completedTodos.length >= 1 && toggleTab === 2 ? 'active' : null} type="button" onClick={() => isTabActive(2)}>Complete</button>
      <span className={`flex flex-row-center ${completedTodos.length === 0 ? 'count-inactive' : 'count-active'}`}>{completedTodos.length}</span>
    </div>
  );
}

TodoFilter.propTypes = {
  todos: PropTypes.array.isRequired,
  toggleTab: PropTypes.number.isRequired,
  setToggleTab: PropTypes.func.isRequired,
  completedTodos: PropTypes.array.isRequired,
};

export default TodoFilter;
