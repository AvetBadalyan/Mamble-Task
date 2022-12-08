import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
  isHidden: false,
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
    toggleState(state, { payload }) {
      state.todoList = state.todoList.map((task) => {
        if (task.id === payload.id) {
          task.isCompleted = payload.isCompleted;
        }
        return task;
      });
    },
    toggleHidden(state) {
      state.isHidden = !state.isHidden;
    },
  },
});

export const { addTodo, deleteTask, toggleState, toggleHidden } =
  todoListSlice.actions;

export default todoListSlice.reducer;
