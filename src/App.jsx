/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const App = () => {
  // State declarations
  const [todoList, setTodoList] = useState([]); // Default to an empty array
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  // Fetch data from Airtable
  const fetchData = async () => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_AIRTABLE_API_TOKEN}`,
      },
    };

    const url = `https://api.airtable.com/v0/${import.meta.env.VITE_AIRTABLE_BASE_ID}/${import.meta.env.VITE_AIRTABLE_NAME}`;

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();

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

  // Fetch todos on initial render
  useEffect(() => {
    fetchData();
  }, []);

  // Persist data to localStorage when todoList changes (and not loading)
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('savedTodoList', JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  // Add a new todo
  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  // Remove a todo by id
  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
  };

  return (
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
  );
};

export default App;
