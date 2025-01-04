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


  const addTodo = (newTodo) => {  //takes a new todo object and add it to the list
    setTodoList([...todoList, newTodo]); 
  }

  const removeTodo = (id) => { 
    const updateTodoList = todoList.filter((todo) => todo.id !== id); 
    setTodoList(updateTodoList); 
  }

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} /> {/*//renders the AddTodoForm and passes the handleAddTodo function to it as a prop.*/}
      <TodoList todoList={todoList} onRemoveTodo={removeTodo}/> {/*passes the todoList array to "TodoList" component */}
    </div>
  );
};

export default App;
