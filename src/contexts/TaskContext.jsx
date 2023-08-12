import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [addTask, setAddTask] = useState();
  const [toggleButton, setToggleButton] = useState(true);
  const [type, setType] = useState('add');
  const [todo, setTodo] = useState([]);

  const value = useMemo(() => ({
    addTask, setAddTask, toggleButton, setToggleButton, type, setType, todo, setTodo,
  }));

  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  );
}

TaskProvider.propTypes = {
  children: PropTypes.node,
};
