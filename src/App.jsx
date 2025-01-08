/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, {useState, useEffect} from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const useSemiPState = (key, initialState) => {
  const [state, setState] = React.useState(() => {
    const savedValue = localStorage.getItem(key); 
    return savedValue ? JSON.parse(savedValue) : []; 
  })

  React.useEffect(() => {
    localStorage.setItem('savedTodoList', JSON.stringify(state)); 
  }, [state]); 

    return [state, setState]; 
}


const App = () => {

  const [todoList, setTodoList] = useSemiPState('savedTodoList', []); 
  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => { 
    const fetchTodos = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          data: { 
            todoList: JSON.parse(localStorage.getItem('savedTodoList')) || [], 
          }
        })
      }, 2000);
      
    })

    fetchTodos.then((result) => { 
      setTodoList(result.data.todoList); 
      setIsLoading(false); 
    }); 
  }, []); 

    useEffect(() => {
      if (!isLoading) {
        localStorage.setItem('savedTodoList', JSON.stringify(todoList))
      }
    }, [todoList, isLoading]); 

  const addTodo = (newTodo) => {  //takes a new todo object and add it to the list
    setTodoList([...todoList, newTodo]); 
  }

  const removeTodo = (id) => { 
    const updateTodoList = todoList.filter((todo) => todo.id !== id); 
    setTodoList(updateTodoList); 
  }

  return( 
    <div>
      <h1> Todo List</h1>
      {isLoading ? (// conditional rendering for loading indicator 
        <p> Loading...</p>
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} /> 
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} /> 
        </>
      )}
    </div>
  )
}
export default App;
