import React from 'react';

const AddTodoForm = ({ onAddTodo }) => {
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
