import React from 'react'

export default function ToDoCount({ todos }) { // pass in prop
  return <div>Total Todos: {todos.length}</div>;
}