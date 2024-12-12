// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  //state management
  const [todos, setTodos] = useState([]);
  //todos: An array to hold the list of todo items. 
  //setTodos function to update the todos array. 
  const [newTodo, setNewTodo] = useState('');

  //This function is used to add a new Todo and updates the "newTodo" state
  const handleAddTodo = (todoTitle) => {
    const newTodoObject = { id: todos.length + 1, title: todoTitle };
    setTodos([...todos, newTodoObject]);
    setNewTodo(todoTitle);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} /> {/*//renders the AddTodoForm and passes the handleAddTodo function to it as a prop.*/}
      <p>New Todo: {newTodo}</p> {/*Displays the latest added todo */}
      <TodoList todos={todos} /> {/*passes the todos array to "TodoList" component */}
    </div>
  );
};

export default App;
