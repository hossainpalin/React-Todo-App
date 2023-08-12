import { createSlice } from '@reduxjs/toolkit';

// Initial value from local storage
const getLocalStorage = () => {
  const todoList = window.localStorage.getItem('todoList');
  if (todoList) {
    return JSON.parse(todoList);
  }
  window.localStorage.setItem('todoList', []);
  return [];
};

// Initial value
const initialValue = {
  filterStatus: 'all',
  todoList: getLocalStorage(),
};

// Todo slice with reducer
export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem('todoList', JSON.stringify([{ ...action.payload }]));
      }
    },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.task = action.payload.task;
            todo.status = action.payload.status;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const newTodoList = todoListArr.filter((todo) => todo.id !== action.payload);
        window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
        state.todoList = newTodoList;
      }
    },

    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const {
  addTodo, deleteTodo, updateTodo, updateFilterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
