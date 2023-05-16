import React, { useState } from "react";
import "./App.css";
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodovalue] = useState("");
  const addTodo = (e) =>
    e.keyCode === 13 ? setTodos([...todos, todoValue]) : null;
  return (
    <>
      <h1 className="title">Todo App</h1>
      <input className="input"
        type="text"
        value={todoValue}
        onChange={(e) => setTodovalue(e.target.value)}
        onKeyDown={addTodo}
      />
      <ul className="todo-list">
        {todos.map((todo,index) => {
          return <li key={index} className="todo-item">{todo}</li>;
        })}
      </ul>
      <footer className="footer">@anandhu-as</footer>
    </>
  );
}

export default App;
