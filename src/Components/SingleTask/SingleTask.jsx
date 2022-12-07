import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask, toggleState } from "../../features/todoList/todoListSlice";
import "./SingleTask.css";
import deleteButton from "./../../assets//Vector.svg"

export default function SingleTask({ item }) {
  const dispatch = useDispatch();
  console.log(item.isCompleted, "true");

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
      <div className="single-task-name-container">{item.taskName}</div>
      <div className="single-task-button-container">
        <button onClick={removeTask}>
          <img src={deleteButton} alt="delete-btn" className="delete-btn" />
        </button>
      </div>
    </div>
  );
}
