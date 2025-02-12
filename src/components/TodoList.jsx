/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({ todoList, onRemoveTodo  }) => {
  return (
    <ul>
      {todoList.map((todo) => ( // map method iterates over the "todos" array
        <TodoListItem key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo}/> //TodoListItem component
      ))}
    </ul>
  );
};

export default TodoList;
