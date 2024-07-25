import TodoListItem from "./TodoListItem";

const TodoList = (props) => { 
  const { todoList } = props;  // Destructure todoList from props
  
  return (
    <ul>
      {todoList.map((todo) =>
        <TodoListItem key={todo.id} todo={todo} />
      )}
    </ul>
  );
};

export default TodoList;
