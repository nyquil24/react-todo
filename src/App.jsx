import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Correct the import statement

function App() {
  const [todoList, setTodoList] = useState([]);  // New state variable
  
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  // Add new todo to the list
  }

  return (
    <>  
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />  // Pass todoList as a prop
      <AddTodoForm onAddTodo={addTodo} />  // Update prop to use addTodo
    </>
  );
}

export default App;
