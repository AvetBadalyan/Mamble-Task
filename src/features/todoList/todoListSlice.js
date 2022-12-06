import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

export const counterSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: (state, action) => {
    
    },
  },
});

export const { addTodo } = counterSlice.actions;

export default counterSlice.reducer;
