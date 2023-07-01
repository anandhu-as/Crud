import React, { useEffect, useRef, useState } from "react";
const App = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => setInputValue(event.target.value);
  const handleClick = () => {
    setTodos([...todos, inputvalue]);
    setInputValue("");
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
            <h1>{item}</h1>
          </div>
        );
      })}
    </div>
  );
};
export default App;
