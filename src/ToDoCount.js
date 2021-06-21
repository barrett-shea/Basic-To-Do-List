import React from 'react'

export default function ToDoCount({ todos }) { // pass in prop
  return <h3>Total Tasks: {todos.length}</h3>;
}