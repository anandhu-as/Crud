import React from "react";
import "../src/Styles/Todo.css";
import { useRef, useState, useEffect } from "react";
const Todo = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => setInputValue(event.target.value);
  const randomID = Math.floor(Math.random() * 100);
  const handleClick = () => {
    setTodos([
      ...todos,
      { todoValue: inputvalue, id: randomID, status: false },
    ]);
    setInputValue("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handleComplete = (id) => {
    const strike = todos.map((list) => {
      if (list.id === id) return { ...list, status: true };
      return list;
    });
    setTodos(strike);
  };
  const inputRef = useRef();
  {
    /* to focus on inputField */
  }
  useEffect(() => inputRef.current.focus());
  return (
    <div>
      <input
        type="text"
        value={inputvalue}
        onChange={handleChange}
        ref={inputRef}
      />
      <button onClick={handleClick}>add</button>
      {todos.map((item, index) => {
        return (
          <div key={index} className={item.status ? "list" : ""}>
            <h1>{item.todoValue} </h1>
            <button onClick={() => handleDelete(item.id)}>❌</button>
            <button onClick={() => handleComplete(item.id)}>strike</button>
            <button>edit</button>
          </div>
        );
      })}
    </div>
  );
};
export default Todo;
