import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoList/todoListSlice";
import "./Form.css";

export default function Form() {
  const taskRef = useRef();
  const dispatch = useDispatch();

  function submitHandler(e) {
    e.preventDefault();
    dispatch(
      addTodo({
        id: Math.random(),
        taskName: taskRef.current.value,
        isCompleted: false,
      })
    );
    taskRef.current.value = "";
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-input">
        <label for="task">Task</label>
        <input
          type="text"
          placeholder="Type here"
          ref={taskRef}
          id="task"
          name="task"
        />
      </div>
      <div className="form-button">
        <button onClick={submitHandler}> Add </button>
      </div>
    </form>
  );
}
