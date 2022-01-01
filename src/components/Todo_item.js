import React from 'react'
import { BiEdit } from 'react-icons/bi'
import { RiDeleteBinLine } from 'react-icons/ri'

export default function Todo_item({ todos, removeTodo, editTodo, completed }) {
    return (
        <div>
        {todos.map((todo) => {
            const {id, item, agree } = todo
            return (
                <div key={id} className='todo-item'>
                    <div className="title">
                        <input 
                            type="checkbox" 
                            name="item"
                            onChange={() => completed(id)}
                        />
                        <p className={ agree ? 'completed' : '' }>{item}</p>
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
