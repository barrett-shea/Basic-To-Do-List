import React from 'react'

export default function RemoveTop ( { setTodos, todos }) {
  function handleRemove (e) {
    e.preventDefault();
    const shift = todos.shift()
    setTodos([...todos])
  }

  return (
    <button onClick={handleRemove}>
      Remove First
    </button>
  )
}