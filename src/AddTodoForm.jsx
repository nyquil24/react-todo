// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect} from 'react';
import InputWithLabel from './InputWithLabel'



// eslint-disable-next-line react/prop-types
const AddTodoForm = ({ onAddTodo }) => {//onAddTodo prop, passed from App, to add a new todo
  
  const [todoTitle, setTodoTitle] = useState(''); 

  const handleTitleChange = (event) => {
    const newTodoTitle = event.target.value; // Retrieve input value
    setTodoTitle(newTodoTitle); // Update state with new value
  };

  const handleAddTodo = (event) => { 
    event.preventDefault(); 
    onAddTodo({
      id: Date.now(), 
      title:todoTitle, 
    }); 
    setTodoTitle('');
  }
 
  return (
    <form onSubmit={handleAddTodo}>
      <InputWithLabel 
        id="todoTitle"
        value={todoTitle}
        onInputChange={handleTitleChange}
        >
        Title 
        </InputWithLabel>
        <button type="submit">Add</button>
        </form> 
  )
};

export default AddTodoForm;
