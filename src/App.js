import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Form from "./Components/Form/Form";
import SingleTask from "./Components/SingleTask/SingleTask";
import { toggleHidden } from "./features/todoList/todoListSlice";

function App() {
  const { todoList, isHidden } = useSelector((state) => state.todoListSlice);
  const dispatch = useDispatch();
  const hideChangeHandler = () => {
    dispatch(toggleHidden());
  };

  return (
    <div className="App">
      <div className="container">
        <div className="hide-check-container">
          <input type="checkbox" onChange={hideChangeHandler} />
          Hide completed
        </div>
        <div className="form-container">
          <Form />
        </div>
        {todoList.length === 0 ? (
          <div className="blank-home-text">
            <p>your life is a blank page. You write on it.</p>{" "}
            <h1>So start by adding your tasks here.</h1>
          </div>
        ) : (
          <div className="todo-list-container">
            {isHidden
              ? todoList.map((item) => {
                  if (!item.isCompleted) {
                    return <SingleTask key={item.id} item={item} />;
                  }
                })
              : todoList.map((item) => {
                  return <SingleTask key={item.id} item={item} />;
                })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
