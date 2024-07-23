// src/Todo.js
import React from 'react';

const Todo = ({ todo, toggleTodoCompletion }) => {
  return (
    <div
      className="todo"
      style={{
        backgroundColor: '#ffffff',
        padding: '10px',
        borderRadius: '5px',
        marginBottom: '10px',
        width: '100%',
        maxWidth: '400px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        textDecoration: todo.completed ? 'line-through' : 'none',
        border: '1px solid #000'
      }}
    >
      <div>{todo.text}</div>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodoCompletion(todo.id)}
          style={{ marginRight: '10px' }}
        />
        <span style={{ fontSize: '12px', color: '#666' }}>{formatDate(todo.timestamp)}</span>
      </div>
    </div>
  );
}

const formatDate = (timestamp) => {
  const date = new Date(timestamp);
  const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  return date.toLocaleDateString('en-US', options);
}

export default Todo;
