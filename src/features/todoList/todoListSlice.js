import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        taskName: action.payload.taskName,
        isCompleted: false,
      };
      state.todoList.push(newTodoList);
    },
    deleteTask: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
    toggleState: () => {

    },
  },
});

export const { addTodo, deleteTask, toggleState } = todoListSlice.actions;

export default todoListSlice.reducer;
