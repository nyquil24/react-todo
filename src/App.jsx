import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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

  return (
    <>
      <h1>Todo List</h1>
      <ul>{todoList.map(function (item){
        return (
          <li>
          <span>{item.id}</span>
          <br/>
          <span>{item.title}</span>
          </li> 
        ); 
      })}</ul>
    </>
  )
}

export default App
