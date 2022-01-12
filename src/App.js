import React, { useState } from 'react';
import { MdAddBox } from "react-icons/md";
import './App.css';
import ClearTodo from './components/Clear_todo';
import TodoItem from './components/Todo_item';

function App() {
  const [pending, setPending] = useState(null)
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState('')
  const [message, setMessage] = useState({ active: false, showMessage: '' })
  // const inputRef = useRef()

  const addTodo = (e) => {
    e.preventDefault()
    if(item){
      const newItem = {id: new Date().getTime().toString(), item: item, agree: false}
      setTodos([...todos, newItem])
    } else {
      alert('Enter the valid value...')
    }
    setItem('')
    console.log(todos)
    // showing pending task
    // pending_task()
  }

  // console.log(todos)

  const completed = (id) => {
    todos.forEach(todo => { 
      if(todo.id === id) {
        todo.agree = !todo.agree
      }
    })
    
    setTodos([...todos])
    // showing pending task 
    pending_task()
  }

  // showing pending task 
  const pending_task = () => {
    const PENDING_TASKS = todos.filter(todo => todo.agree === false)
    setPending(PENDING_TASKS.length)
    setMessage({ active: true, showMessage: 'show-message'})
  }

  // removing show-message class 
  const removeMessage = () => {
    setMessage({ active: false, showMessage: '' })
  }

  const removeTodo = (id) => {
    const newItems = todos.filter(todo => {
      return todo.id !== id
    })
    setTodos(newItems)
    // showing pending task
    // pending_task()
  }

  const editTodo = (id) => {
    const editItems = todos.filter(todo => {
      return todo.id === id
    })
    const [editItem] = editItems 
    setItem(editItem.item)
    removeTodo(id)
    // showing pending task
    // pending_task()
  }

  const clearTodos = () => {
    setTodos([])
    // showing pending task
    // pending_task()
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
          completed={completed}
        />
      )}
      <ClearTodo
        clearTodos={clearTodos}
        pending={pending}
        message={message}
        removeMessage={removeMessage}
        todos={todos}
      />
    </div>
  );
}

export default App;
