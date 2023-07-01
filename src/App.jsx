import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => setInputValue(event.target.value);
  const randomID = Math.floor(Math.random() * 100);
  const handleClick = () => {
    setTodos([...todos, { todoValue: inputvalue, id: randomID }]);
    setInputValue("");
  };
  const handleDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
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
          <div key={index}>
            <h1>{item.todoValue} </h1>
            <button onClick={() => handleDelete(item.id)}>❌</button>
          </div>
        );
      })}
    </div>
  );
};
export default App;
