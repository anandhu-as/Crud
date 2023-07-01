import React, { useState } from "react";

const App = () => {
  const [inputvalue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handleChange = (event) => setInputValue(event.target.value);
  const handleClick = () => {
    setTodos([...todos,inputvalue]);

    console.log(todos);
  };

  return (
    <div>
      <input type="text" value={inputvalue} onChange={handleChange} />
      <button onClick={handleClick}>add</button>
      <h1>{todos}</h1>
    </div>
  );
};

export default App;
