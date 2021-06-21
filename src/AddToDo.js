import React, {useState} from 'react'

export default function AddToDo({ setTodos }) {
  const [item, setItem] = useState('')
  
  function handleChange(e) {
    e.preventDefault();
    setItem(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    const todo = e.target.elements.todo.value; // id.value
    if (todo) 
      {setTodos(prevTodos => [...prevTodos, todo]); // spread all of the previous todos and add new todo as last element in array
      setItem('')
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} value={item} type="text" id='todo' />
      <button type="submit">Add Todo</button>
    </form>
  );
}