/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TodoList from "./TodoList"


const TodoListItem = ({todo}) =>{

    return(
        <li>
            {todo.title} {/*takes a single "todo" object as a prop */}
        </li>
    )

}


export default TodoListItem