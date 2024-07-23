// src/TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleTodoCompletion }) => {
  return (
    <div className="todo-list" style={{ marginTop: '20px', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} toggleTodoCompletion={toggleTodoCompletion} />
      ))}
    </div>
  );
}

export default TodoList;
