import React, { useState } from 'react';
import { MdAddBox } from "react-icons/md";
import './App.css';
import ClearTodo from './components/Clear_todo';
import TodoItem from './components/Todo_item';

function App() {
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState('')
  const [agree, setAgree] = useState(false)
  // const inputRef = useRef()

  const addTodo = (e) => {
    e.preventDefault()
    if(item){
      const newItem = {id: new Date().getTime().toString(), item: item}
      setTodos([...todos, newItem])
    }
    setItem('')
  }

  const removeTodo = (id) => {
    const newItems = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newItems)
  }

  const editTodo = (id) => {
    const editItems = todos.filter(todo => {
      return todo.id === id
    })
    const [editItem] = editItems 
    setItem(editItem.item)
    removeTodo(id)
  }

  const isCompleted = (id, event) => {
    todos.forEach(todo => {
      if(todo.id === id) {
        setAgree(event.target.checked)
      }
    })
  }

  
  return (
    <div className="container">
      <h1>Todo App</h1>
      <form className="add-todo">
        <input 
          value={item}
          type="text"  
          placeholder="Add your new todo" 
          onChange={(e) => setItem(e.target.value) }
        />
        <button type='submit' onClick={addTodo}>
          <MdAddBox />
        </button>
      </form>
      {todos.length > 0 && (
        <TodoItem 
          todos={todos} 
          removeTodo={removeTodo} 
          editTodo={editTodo} 
          agree={agree}
          isCompleted={isCompleted}
        />
      )}
      
      <ClearTodo />
    </div>
  );
}

export default App;
