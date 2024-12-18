/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  //state management
  const [todos, setTodos] = useState([]);
  //todos: An array to hold the list of todo items. 
  //setTodos function to update the todos array. 
  const [todoList, setTodoList] = useState([]); //create todoList state variable

  //This function is used to add a new Todo and updates the "newTodo" state
  const handleAddTodo = (todoTitle) => {
    const newTodoObject = { id: todos.length + 1, title: todoTitle };
    setTodos([...todos, newTodoObject]);
    setNewTodo(todoTitle);
  };

  const addTodo = (newTodo) => {  //takes a new todo object and add it to the list
    setTodoList([...todoList, newTodo]); 
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} /> {/*//renders the AddTodoForm and passes the handleAddTodo function to it as a prop.*/}
      <TodoList todoList={todoList} /> {/*passes the todoList array to "TodoList" component */}
    </div>
  );
};

export default App;
