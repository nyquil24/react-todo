

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
        {todoList.map(({ id, title}) => (
        <li key={id}>
          <span>{id}</span>
          <br/>
          <span>{title}</span>
        </li>
        ))}
    </ul>
    </>
    )}

export default TodoList