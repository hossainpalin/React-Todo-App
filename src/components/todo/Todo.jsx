import PropTypes from 'prop-types';
import React from 'react';
import { CgTrash } from 'react-icons/cg';
import { TiEdit } from 'react-icons/ti';
import './todo.min.css';

function Todo({
  title, time, id, todos, setTodos, setTodoInput, setToggleButton,
  setTodoEdit, completedTodos, setCompletedTodos,
}) {
  console.log('Todo component rendering...');
  // Complete todo item
  const handleComplete = (e) => {
    const completeTodo = todos.find((todo) => id === todo.id);
    if (e.target.checked) {
      setCompletedTodos([...completedTodos,
        { title: completeTodo.title, time: completeTodo.time, id: completeTodo.id }]);

      // Todo item move to completed list
      const moveToComplete = todos.filter((todo) => id !== todo.id);
      setTodos(moveToComplete);
    }
  };

  // Edit todo item
  const onEdit = () => {
    const editTodo = todos.find((todo) => id === todo.id);
    setTodoInput(editTodo.title);
    setToggleButton(false);
    setTodoEdit(id);
  };

  // Delete todo item
  const onDelete = () => {
    // Delete pending todo item
    const deletePendingTodo = todos.filter((todo) => id !== todo.id);
    setTodos(deletePendingTodo);

    // Delete completed todo item
    const deleteCompletedTodo = completedTodos.filter((todo) => id !== todo.id);
    setCompletedTodos(deleteCompletedTodo);
  };

  return (
    <div className="todo-items flex flex-row-center">
      <div className="todo flex justify-space-between">
        <div className="flex flex-row-center">
          {/* Todo complete checkbox here */}
          <input type="checkbox" onChange={handleComplete} />

          {/* All todos display here */}
          <div className="task-title flex flex-col-start">
            <h3>{title}</h3>
            <p>{time}</p>
          </div>
        </div>

        <div className="task-btn flex flex-row-center">
          {/* Todo edit button here */}
          <button type="button" title="Edit" onClick={onEdit}>
            <TiEdit />
          </button>

          {/* Todo delete button here */}
          <button type="button" title="Delete" onClick={onDelete}>
            <CgTrash />
          </button>
        </div>

      </div>
    </div>
  );
}

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setTodoInput: PropTypes.func.isRequired,
  setToggleButton: PropTypes.func.isRequired,
  setTodoEdit: PropTypes.func.isRequired,
  completedTodos: PropTypes.array.isRequired,
  setCompletedTodos: PropTypes.func.isRequired,

};

export default Todo;
