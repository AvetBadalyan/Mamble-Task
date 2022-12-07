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
        <div className="hide-check-container">
          <input type="checkbox" />
          Hide completed
        </div>
        <div className="form-container">
          <Form />
        </div>
        <div className="todo-list-container">
          {todoList.length === 0 && (
            <div className="blank-home-text">
              {" "}
              <p>your life is a blank page. You write on it.</p>{" "}
              <h1>So start by adding your tasks here.</h1>
            </div>
          )}

          <div className="todo-list">
               {todoList.length > 0 &&
            todoList.map((todo) => <SingleTask key={todo.id} item={todo} />)}
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default App;
