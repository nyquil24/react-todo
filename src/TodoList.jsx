

const todoList = [
    {
      id: 1, 
      title: 'Complete assignment'
    }, 
    {
      id: 2, 
      title: 'Clean'
    },
    {
      id: 3, 
      title: 'Cook'
    }
  ]; 



const TodoList = () => {
    return(
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
    )
    
}



export default TodoList; 