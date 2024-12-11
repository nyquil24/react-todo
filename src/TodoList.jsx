/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => ( // map method iterates over the "todos" array
        <TodoListItem key={todo.id} todo={todo} /> //TodoListItem component
      ))}
    </ul>
  );
};

export default TodoList;
