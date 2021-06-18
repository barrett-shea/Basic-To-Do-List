import React from 'react'

export default function ToDoList({ todos }) {
  return (
    <ol>
      {todos.map((todo) => (
        <li key={todo}>{todo}</li>
      ))}
    </ol>
  );
}