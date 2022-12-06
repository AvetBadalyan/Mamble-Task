import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todoList/todoListSlice";

export const store = configureStore({
  reducer: {
    todoListSlice: todoListReducer,
  },
});
