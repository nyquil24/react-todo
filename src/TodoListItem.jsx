const TodoListItem = (props) => {
    
    const {id, title} = props.todo; 

    return(
        // <li key={id}>
        <li>
          <span>{id}</span>
          <br/>
          <span>{title}</span>
        </li>
    ); 
}

export default TodoListItem