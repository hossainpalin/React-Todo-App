import { format } from 'date-fns';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { TaskContext } from '../contexts/TaskContext';
import { deleteTodo, updateTodo } from '../features/todoSlice';
import Styles from '../styles/modules/todoList.module.scss';
import Button from './Button';
import CheckBox from './CheckBox';

// Framer motion
const taskAnimation = {
  hidden: { y: 10, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function TodoList({ todo }) {
  const [checked, setChecked] = useState(false);
  const {
    setAddTask, setToggleButton, setType, setTodo,
  } = useContext(TaskContext);
  const dispatch = useDispatch();

  // Task status check onload
  useEffect(() => {
    if (todo.status === 'complete') {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  // Task status toggle function
  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({ ...todo, status: checked ? 'pending' : 'complete' }),
    );
    if (!checked) {
      toast.success('Task complete successfully');
    }
  };

  // Task update function
  const handleUpdate = () => {
    setAddTask(todo.task);
    setType('update');
    setToggleButton(false);
    setTodo(todo);
  };

  // Task delete function
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success('Task delete successfully');
    setToggleButton(true);
  };

  return (
    <motion.div
      className={`${Styles.todoList} flex flex-row-center`}
      variants={taskAnimation}
      initial="hidden"
      animate="visible"
    >
      <motion.div className={`${Styles.task} ${checked && Styles.taskConmlepe} flex justify-space-between`}>

        {/* Task display here */}
        <div className="flex flex-row-center">

          {/* Task complete checkbox here */}
          <CheckBox checked={checked} handleCheck={handleCheck} />

          {/* Task title here */}
          <div className={`${Styles.taskTitle} flex flex-col-start`}>
            <h3 className={checked ? Styles.complete : null}>{todo.task}</h3>
            <p>{format(new Date(todo.time), `${'hh:mm:ss a'} | ${'dd-MMM-yyyy'}`)}</p>
          </div>
        </div>

        {/* Task action here */}
        <div className={`${Styles.actionButton} flex flex-row-center`}>

          {/* Task edit button here */}
          <Button onClick={() => handleUpdate()}><MdEdit /></Button>

          {/* Task delete button here */}
          <Button onClick={() => handleDelete()}><MdDelete /></Button>
        </div>

      </motion.div>
    </motion.div>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object,
};

export default TodoList;
