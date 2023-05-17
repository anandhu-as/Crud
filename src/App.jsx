import React, { useState } from "react";
import "./App.css";
let globalID = 0;
function App() {
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodovalue] = useState("");
  const addTodo = (e) =>
    e.keyCode === 13
      ? setTodos([...todos, { todo: todoValue, id: globalID++ }])
      : null;
  const deleteTodo = (deleteId) =>
    setTodos((oldTodos) => oldTodos.filter((item) => item.id !== deleteId));
  return (
    <>
      <h1 className="title">Todo App</h1>
      <input
        className="input"
        type="text"
        value={todoValue}
        onChange={(e) => setTodovalue(e.target.value)}
        onKeyDown={addTodo}
      />
      <ul className="todo-list">
        {todos.map((item, i) => {
          return (
            <div key={item.id} className="container">
              <li className="todo-item">{item.todo}</li>
              <button onClick={() => deleteTodo(item.id)}> ❌</button>
            </div>
          );
        })}
      </ul>
      <footer className="footer">@anandhu-as</footer>
    </>
  );
}
export default App;
