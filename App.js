// src/App.js
import React, { useState } from 'react';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false, timestamp: new Date() },
    { id: 2, text: 'Build a Todo App', completed: true, timestamp: new Date() }
  ]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        completed: false,
        timestamp: new Date()
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  }

  const toggleTodoCompletion = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }

  const handleClearCompleted = () => {
    const filteredTodos = todos.filter(todo => !todo.completed);
    setTodos(filteredTodos);
  }

  return (
    <div className="App" style={{ backgroundColor: '#f0f8ff', minHeight: '100vh', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>Todo List</h1>
      <div style={{ backgroundColor: '#000', padding: '20px', borderRadius: '10px', width: '100%', maxWidth: '400px', marginBottom: '20px' }}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add new todo"
          style={{ padding: '10px', width: '100%', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '10px 20px', backgroundColor: '#008cba', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>Add</button>
      </div>
      <TodoList todos={todos} toggleTodoCompletion={toggleTodoCompletion} />
      <button onClick={handleClearCompleted} style={{ padding: '10px 20px', backgroundColor: '#dc3545', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', width: '200px' }}>Clear Completed</button>
    </div>
  );
}

export default App;
