import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Form from "./Components/Form/Form";
import SingleTask from "./Components/SingleTask/SingleTask";

function App() {
  const todoList = useSelector((state) => state.todoListSlice.todoList);

  return (
    <div className="App">
      <div className="container">
        <div className="form-container">
          <Form />
        </div>
        <div className="todo-list-container">
          {todoList.length === 0 && (
            <div className="blank-home-text">
              {" "}
              <h2>your life is a blank page. You write on it.</h2>{" "}
              <h1>So start by adding your tasks here.</h1>
            </div>
          )}
        </div>

        {todoList.length > 0 &&
          todoList.map((todo) => <SingleTask key={todo.id} item={todo} />)}
      </div>
    </div>
  );
}

export default App;
