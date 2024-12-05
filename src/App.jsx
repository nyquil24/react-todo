import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  //state management
  const [todos, setTodos] = useState([]);
  //todos: An array to hold the list of todo items. 
  //setTodos function to update the todos array. 
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (todoTitle) => {
    const newTodoObject = { id: todos.length + 1, title: todoTitle };
    setTodos([...todos, newTodoObject]);
    setNewTodo(todoTitle);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={handleAddTodo} />
      <p>New Todo: {newTodo}</p>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
