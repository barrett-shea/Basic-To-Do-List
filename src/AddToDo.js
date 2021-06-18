import React from 'react'

export default function AddToDo({ setTodos }) {
  function handleSubmit(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value; // id.value
    setTodos(prevTodos => [...prevTodos, todo]); // spread all of the previous todos and add new todo as last element in array
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" id='todo' />
      <button type="submit">Add Todo</button>
    </form>
  );
}