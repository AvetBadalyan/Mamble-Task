import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleState } from "../../features/todoList/todoListSlice";
import "./SingleTask.css";

export default function SingleTask({ item }) {
  const dispatch = useDispatch();

  function removeTask() {
    dispatch(
      deleteTask({
        id: item.id,
      })
    );
  }
  function checkHandler(e) {
    dispatch(
      toggleState({
        id: item.id,
        isCompleted: e.target.checked,
      })
    );
  }

  return (
    <div className={item.isCompleted ? "single-task completed" : "single-task"}>
      <input
        className="checkbox"
        type="checkbox"
        checked={item.isCompleted}
        onChange={checkHandler}
      />
      <div className="single-task-input-container">{item.taskName}</div>
      <div className="single-task-button-container">
        <button onClick={removeTask}>Delete</button>
      </div>
    </div>
  );
}
