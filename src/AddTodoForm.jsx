// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const AddTodoForm = ({ onAddTodo }) => {//onAddTodo prop, passed from App, to add a new todo
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value.trim();
    if (todoTitle) {
      onAddTodo(todoTitle);
      event.target.reset();
    }
  };

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" placeholder="Add a new todo" />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
