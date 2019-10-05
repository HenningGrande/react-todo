import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <input
          value={input}
          onChange={({ target }) => setInput(target.value)}
        />
        <button
          onClick={() => {
            setTodos([...todos, input]);
          }}
        >
          Add todo
        </button>
        <ul>
          {todos.map(todo => (
            <li
              onClick={() => {
                const index = todos.indexOf(todo);
                setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
              }}
            >
              {todo}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default App;
