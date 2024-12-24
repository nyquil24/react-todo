// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';




// eslint-disable-next-line react/prop-types
const AddTodoForm = ({ onAddTodo }) => {//onAddTodo prop, passed from App, to add a new todo
  
  const [todoTitle, setTodoTitle] = useState(''); 

  
  const handleAddTodo = (event) => {
    event.preventDefault();
    const todoTitle = event.target.elements.title.value.trim();
    if (todoTitle) {
      onAddTodo(todoTitle);
      event.target.reset();
    }
  };

  const handleTitleChange = (event) => { 
    event.preventDefault(); 
    onAddTodo({title: todoTitle, id: Date.now()})
    setTodoTitle(''); 
  }

  return (
    <form onSubmit={handleAddTodo}>
      <input type="text" name="title" placeholder="Add a new todo"
      value={todoTitle} onChange={handleTitleChange} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;
