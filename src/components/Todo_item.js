import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function Todo_item({ todos, removeTodo, editTodo, agree, isCompleted }) {
    return (
        <div>
        {todos.map((todo) => {
            const {id, item} = todo
            return (
                <div key={id} className='todo-item'>
                    <div className="title">
                        <input 
                            onChange={(event) => isCompleted(id, event)} 
                            checked={agree} 
                            type="checkbox" 
                            name="item" 
                        />
                        <p>{item}</p>
                    </div>
                    <div className="icons">
                        <button onClick={() => editTodo(id)}>
                            <BiEdit />
                        </button>
                        <button onClick={() => removeTodo(id)}>
                            <RiDeleteBinLine />
                        </button>
                    </div>    
                </div>
            )
        })}
        </div>
    )
}
