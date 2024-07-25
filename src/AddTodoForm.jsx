import { useState } from 'react';

const AddTodoForm = (props) => {
  const [todoTitle, setTodoTitle] = useState(''); // New state variable

  const handleTitleChange = (event) => { 
    const newTodoTitle = event.target.value; // Gets input value
    setTodoTitle(newTodoTitle); // Update state
  }

  const handleAddTodo = (event) => {
    event.preventDefault(); 
    const newTodo = {
      title: todoTitle, 
      id: Date.now()  // Unique identifier
    }; 
    props.onAddTodo(newTodo); // Pass newTodo object
    setTodoTitle(''); // Clear input field 
  }

  return (
    <form onSubmit={handleAddTodo}> 
      <label htmlFor="todoTitle">Title</label>
      <input
        type="text"
        id="todoTitle"
        name="title"
        value={todoTitle} // Controlled input
        onChange={handleTitleChange} // Handles change
      /> 
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
