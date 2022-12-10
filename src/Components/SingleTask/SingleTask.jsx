import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleState } from "../../features/todoList/todoListSlice";
import Modal from "../Modal/Modal";
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
        type="checkbox"
        className="checkbox"
        checked={item.isCompleted}
        onChange={checkHandler}
      />

      <div className="single-task-name-container">{item.taskName}</div>
      <Modal removeTask={removeTask} />
    </div>
  );
}
