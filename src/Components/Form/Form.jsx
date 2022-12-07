import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../features/todoList/todoListSlice";
import "./Form.css";

export default function Form() {
  const taskRef = useRef();
  const dispatch = useDispatch();

  const [inputIsValid, setInputIsValid] = useState(true);

  const changeHandler = () => {
    taskRef.current?.value?.length > 54
      ? setInputIsValid(false)
      : setInputIsValid(true);
    console.log(inputIsValid, "inputIsValid");
  };

  function submitHandler(e) {
    e.preventDefault();
    if (inputIsValid) {
      dispatch(
        addTodo({
          id: Math.random(),
          taskName: taskRef.current.value,
          isCompleted: false,
        })
      );
      taskRef.current.value = "";
    }
  }

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="form-input">
        <label>
          Task
          <input
            type="text"
            placeholder="Write here"
            ref={taskRef}
            onChange={changeHandler}
          />
        </label>
      </div>
      <div className="form-button">
        <button onClick={submitHandler}> Add </button>
      </div>
      {!inputIsValid && <div>input is not valid</div>}
    </form>
  );
}
