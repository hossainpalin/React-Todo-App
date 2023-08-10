import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { BiPlusCircle } from 'react-icons/bi';
import { FiArrowUpCircle } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { TaskContext } from '../contexts/TaskContext';
import { addTodo, updateTodo } from '../features/todoSlice';
import Styles from '../styles/modules/todoInput.module.scss';
import Button from './Button';
import Input from './Input';

function TodoInput() {
  const [status, setStatus] = useState('pending');
  const [type, setType] = useState('add');
  const {
    addTask, setAddTask, toggleButton, setToggleButton,
  } = useContext(TaskContext);

  const todoList = useSelector((state) => state.todo.todoList);
  const sortedTodoList = [...todoList].sort((a, b) => new Date(b.time) - new Date(a.time));
  const [todo] = sortedTodoList.map((item) => item);

  const dispatch = useDispatch();

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
          dispatch(updateTodo({ ...todo, task: addTask, status }));
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
