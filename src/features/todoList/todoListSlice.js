import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const todoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addToDo: (state, action) => {
      let newTodoList = {
        id: Math.random(),
        taskName: action.payload.taskName,
        isCompleted: false,
      };
      state.todoList.push(newTodoList);
    },
    deleteToDo: (state, action) => {
      let { todoList } = state;
      state.todoList = todoList.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTodo, deleteToDo } = todoListSlice.actions;

export default todoListSlice.reducer;
