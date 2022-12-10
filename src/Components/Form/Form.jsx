import React, {useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoList/todoListSlice";
import "./Form.css";

export default function Form() {
  const taskRef = useRef();
  const dispatch = useDispatch();

  const [inputIsValid, setInputIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const changeHandler = () => {
    if (taskRef.current?.value?.trim().length < 1 || !taskRef.current) {
      setErrorMessage("No letters, empty spaces, please write a task");
      setInputIsValid(false);
    } else if (taskRef.current?.value?.trim().length > 54) {
      setErrorMessage("Task content can contain max 54 characters.");
      setInputIsValid(false);
    } else setInputIsValid(true);
  };

  function submitHandler(e) {
    e.preventDefault();
    changeHandler();
    if (inputIsValid) {
      dispatch(
        addTodo({
          id: Math.random(),
          taskName: taskRef.current.value,
          isCompleted: false,
        })
      );
      taskRef.current.value = "";
      setInputIsValid(false);
      setErrorMessage("");
    }
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div className="form-input">
          <label>
            Task
            <input
              type="text"
              placeholder="Write here"
              ref={taskRef}
              onChange={changeHandler}
              maxLength="55"
            />
            {!inputIsValid && (
              <div className="error-message">{errorMessage}</div>
            )}
          </label>
        </div>
        <div className="form-button">
          <button onClick={submitHandler}> Add </button>
        </div>
      </form>
      <div></div>
    </div>
  );
}
