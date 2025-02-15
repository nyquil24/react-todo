/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  const [todoList, setTodoList] = useState([]); // Default to an empty array
  const [isLoading, setIsLoading] = useState(true); // Track loading state


  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_NAME}?view=Grid%20view&sort[0][field]=title&sort[0][direction]=asc`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

      data.records.sort((objectA, objectB) => {
        if (objectA.fields.title < objectB.fields.title) return -1;
        if (objectA.fields.title > objectB.fields.title) return 1;
        return 0;
      });

      const todos = data.records.map((record) => ({
        id: record.id,
        title: record.fields.title,
      }));

      setTodoList(todos);
      setIsLoading(false);
    } catch (error) {
      console.error(`Fetch error: ${error.message}`);
    }
  };


  useEffect(() => {
    fetchData();
  }, []);


  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);


  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };


  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
    <BrowserRouter> 
     <Routes> 
      <Route path="/" element={ 
       <div>
        <h1>Todo List</h1>
          {isLoading ? ( // Conditional rendering for loading indicator
          <p>Loading...</p>
      ) : (
        <>
          <AddTodoForm onAddTodo={addTodo} />
          <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
        </>
      )}
    </div>
      }
      />
    <Route path="/new" element={ 
      <div> 
        <h1>New Todo List</h1>
      </div>
      }
      />
    </Routes> 
   </BrowserRouter>
  );
};

export default App;
