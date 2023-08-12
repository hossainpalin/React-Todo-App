import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiPlusCircle } from 'react-icons/bi';
import { FiArrowUpCircle } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { TaskContext } from '../contexts/TaskContext';
import { addTodo, updateTodo } from '../features/todoSlice';
import Styles from '../styles/modules/todoInput.module.scss';
import Button from './Button';
import Input from './Input';

function TodoInput() {
  const [status, setStatus] = useState('pending');
  const dispatch = useDispatch();
  const {
    addTask, setAddTask, toggleButton, setToggleButton, type, setType, todo,
  } = useContext(TaskContext);

  // Handle check function
  useEffect(() => {
    if (type === 'update' && todo) {
      setAddTask(todo.task);
      setStatus(todo.status);
    } else {
      setAddTask('');
      setStatus('pending');
    }
  }, [type, todo]);

  // Handle submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (addTask) {
      if (type === 'add') {
        dispatch(addTodo(
          {
            id: uuid(),
            task: addTask,
            status,
            time: new Date().toLocaleString(),
          },
        ));
        toast.success('Task added successfully');
      }

      if (type === 'update') {
        if (todo.task !== addTask) {
          dispatch(updateTodo({
            id: todo.id, task: addTask, status, time: todo.time,
          }));
          toast.success('Task updated successfully');
        } else {
          toast.error('Task already exist');
          return;
        }
        setType('add');
      }
    } else {
      toast.error('Please enter a task');
    }
    setAddTask('');
    setToggleButton(true);
  };

  return (
    <div className={Styles.todoInput}>
      <form className="flex justify-space-between" onSubmit={handleSubmit}>
        <Input placeholder="Task here..." value={addTask || ''} onChange={(e) => setAddTask(e.target.value)} />

        <Button type="submit">
          {toggleButton ? <BiPlusCircle /> : <FiArrowUpCircle />}
        </Button>
      </form>
    </div>
  );
}

export default TodoInput;
