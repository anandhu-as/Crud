import React, { useState } from "react";
const App = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () =>{
    setTodos([...todos, todo])
    setTodos("")
  };
  return (
    <div>
      <input type="text" onChange={(event) => setTodo(event.target.value)} />
      <button onClick={addTodo}>Add</button>
      {todos.map((data) => {
        return <h2 key={data}>{data}</h2>;
      })}
    </div>
  );
};

export default App;
