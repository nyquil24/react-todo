import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm'; // Correct the import statement


function useSemiPersistentState(){
  const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];
  const [todoList, setTodoList] = useState(savedTodoList); 

   //React hook
   useEffect(() =>{ // saves todoList to localStorage on change
    localStorage.setItem('savedTodoList', 
                  JSON.stringify(todoList));
  }, [todoList]); 

  return [totList, setTodoList]; 

}

function App() {
  const [todoList, setTodoList] = useState([]);  /* New state variable,
                                                   setter setTodoList*/
  //gets the saved todo list from localStorage and parses it
  const savedTodoList = JSON.parse(localStorage.getItem('savedTodoList')) || [];

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);  // Add new todo to the list
  }

 

  return (
    <>  
      <h1>Todo List</h1>
      <TodoList todoList={todoList} />  // Pass todoList state as a prop to component
      <AddTodoForm onAddTodo={addTodo} />  // Update prop to use addTodo
    </>
  );
}

export default App;
