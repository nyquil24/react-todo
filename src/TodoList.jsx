import TodoListItem from "./TodoListItem";


const TodoList = () => {
    
    const todoList = [
    {
      id: 123, 
      title: "Practice", 
    }, 
    {
      id: 234, 
      title: "Read", 
    }, 
    {
      id: 345, 
      title: "Project", 
    }
  ]; 

    
    return(
        <>
      
      <ul>
        {todoList.map((todo) =>
          <TodoListItem key={todo.id} todo={todo}/>
        )}
       
    </ul>
    </>
    )}

export default TodoList