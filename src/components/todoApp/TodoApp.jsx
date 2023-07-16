import React, { useEffect, useState } from 'react';
import AddTodo from '../addTodo/AddTodo';
import TodoFilter from '../todoFilter/TodoFilter';
import TodoHead from '../todoHead/TodoHead';
import TodoList from '../todoList/TodoList';
import './todoApp.min.css';

// Get todo list from local storage
const getAllTodoList = () => {
  const allTodoList = localStorage.getItem('all-list');

  if (allTodoList) {
    return JSON.parse(localStorage.getItem('all-list'));
  }
  return [];
};

const getCompletedTodoList = () => {
  const completedTodoList = localStorage.getItem('complete-list');

  if (completedTodoList) {
    return JSON.parse(localStorage.getItem('complete-list'));
  }
  return [];
};

function TodoApp() {
  const [todos, setTodos] = useState(getAllTodoList());
  const [todoInput, setTodoInput] = useState('');
  const [toggleButton, setToggleButton] = useState(true);
  const [todoEdit, setTodoEdit] = useState('');
  const [toggleTab, setToggleTab] = useState(1);
  const [completedTodos, setCompletedTodos] = useState(getCompletedTodoList());

  console.log('Todo App component rendering...');

  // Todo store to local storage
  useEffect(() => {
    localStorage.setItem('all-list', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('complete-list', JSON.stringify(completedTodos));
  }, [completedTodos]);

  return (
    <div className="todo-wrapper flex flex-col-center">
      <div className="todo-container flex flex-col-center">

        {/* Todo head here */}
        <TodoHead />

        {/* Todo filter here */}
        <TodoFilter
          todos={todos}
          completedTodos={completedTodos}
          toggleTab={toggleTab}
          setToggleTab={setToggleTab}
        />

        {/* Todo list here */}
        <TodoList
          todos={todos}
          setTodos={setTodos}
          todoInput={todoInput}
          setTodoInput={setTodoInput}
          toggleButton={toggleButton}
          setToggleButton={setToggleButton}
          todoEdit={todoEdit}
          setTodoEdit={setTodoEdit}
          completedTodos={completedTodos}
          setCompletedTodos={setCompletedTodos}
          toggleTab={toggleTab}
        />
      </div>

      {/* Add new todo here */}
      <AddTodo
        todos={todos}
        setTodos={setTodos}
        todoInput={todoInput}
        setTodoInput={setTodoInput}
        toggleButton={toggleButton}
        setToggleButton={setToggleButton}
        todoEdit={todoEdit}
        setTodoEdit={setTodoEdit}
      />
    </div>
  );
}

export default TodoApp;
