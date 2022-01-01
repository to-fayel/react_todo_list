import React, { useState } from 'react';
import { MdAddBox } from "react-icons/md";
import './App.css';
import ClearTodo from './components/Clear_todo';
import TodoItem from './components/Todo_item';

function App() {
  const [todos, setTodos] = useState([])
  const [item, setItem] = useState('')
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
  }

  const completed = (id) => {
    // const unCompletedItem = todos.filter(todo => todo.id !== id)
    // const completedItem = todos.filter(todo => todo.id === id)
    
    // completedItem[0].agree = !completedItem[0].agree
    // setTodos([...completedItem, ...unCompletedItem])
    // console.log(todos)
    const newTodos = todos.reduce((todo, index) => {
      if(todo.id === id) {
        todo.agree = !todo.agree
      }
      return todos
    })
    setTodos(newTodos)
    console.log(todos)
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

  const clearTodos = () => {
    setTodos([])
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
      <ClearTodo clearTodos={clearTodos} />
    </div>
  );
}

export default App;
