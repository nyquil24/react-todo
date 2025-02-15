/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import TodoList from "./TodoList"
import style from "./TodoListItem.module.css"; 
import PropTypes from "prop-types";

const TodoListItem = ({todo, onRemoveTodo}) =>{

    return(
        <li  className={style.ListItem}>
            {todo.title} {/*takes a single "todo" object as a prop */}
            <button type="button" onClick={() => onRemoveTodo(todo.id)}> 
            Remove
            </button>
        </li>
    )

}

TodoListItem.PropTypes = {
    todo: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    onRemveTodo: PropTypes.func.isRequired,
}; 

export default TodoListItem