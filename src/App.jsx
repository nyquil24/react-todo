import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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


function App() {
  const [count, setCount] = useState(0)

  
  return (

    <>  
      <h1>Todo List</h1>
      <ul>
      {todoList.map(({ id, title}) => (
        <li key={id}>
          <span>{id} </span>
          <br/> 
          <span>{title}</span>
      </li>
    ))}
    </ul> 
  
    </>
)}
export default App;
