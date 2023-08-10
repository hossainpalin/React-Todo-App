import { createSlice } from '@reduxjs/toolkit';

// Initial value from local storage
const getLocalStorage = () => {
  const todoList = window.localStorage.getItem('todoList');
  if (todoList) {
    return JSON.parse(todoList);
  }
  const emptyArr = window.localStorage.setItem('todoList', []);
  return emptyArr;
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

    // updateTodo: (state, action) => {
    //   const todoList = window.localStorage.getItem('todoList');
    //   if (todoList) {
    //     const todoListArr = JSON.parse(todoList);
    //     const newTodoList = todoListArr.filter((todo) => todo.id === action.payload.id);
    //     if (newTodoList) {
    //       newTodoList[0].id = action.payload.id;
    //       newTodoList[0].task = action.payload.task;
    //       newTodoList[0].status = action.payload.status;
    //       newTodoList[0].time = action.payload.time;
    //     }
    //     window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
    //     state.todoList = newTodoList;
    //   }
    // },

    updateTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.id = action.payload.id;
            todo.task = action.payload.task;
            todo.status = action.payload.status;
            todo.time = action.payload.time;
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = [...todoListArr];
      }
    },

    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            todoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },

    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },

    // deleteTodo: (state, action) => {
    //   const todoList = window.localStorage.getItem('todoList');
    //   if (todoList) {
    //     const todoListArr = JSON.parse(todoList);
    //     const newTodoList = todoListArr.filter((todo) => todo.id !== action.payload);
    //     window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
    //     state.todoList = newTodoList;
    //   }
    // },
  },
});

export const {
  addTodo, deleteTodo, updateTodo, updateFilterStatus,
} = todoSlice.actions;
export default todoSlice.reducer;
