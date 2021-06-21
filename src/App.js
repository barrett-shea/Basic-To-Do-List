import React, {useState} from "react";
import "./App.css";

import ToDoCount from './ToDoCount'
import ToDoList from './ToDoList'
import AddToDo from './AddToDo'
import RemoveTop from './RemoveTop'
import RemoveBottom from './RemoveBottom'

export default function App() {
  const [todos, setTodos] = useState(["Task 1", "Task 2", "Task 3"]); //lift state up to common ancestor
  return (
    <>
      <h1>Basic To Do List</h1>
      <br></br>
      <ToDoCount todos={todos}/> {/* add prop so component can access state*/}
      <ToDoList todos={todos}/>
      <AddToDo setTodos={setTodos}/> {/* no need to pass down values, just setter fcn*/}
      <RemoveTop setTodos={setTodos} todos={todos}/>
      <RemoveBottom setTodos={setTodos} todos={todos}/>
    </>
  );
}
