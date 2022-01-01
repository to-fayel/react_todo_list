import React from 'react'

export default function Clear_todo({ clearTodos }) {
    return (
        <div className='clear-todo'>
            <div className="messege">You have 2 pending tasks</div>
            <button onClick={ clearTodos }>clear all</button>
        </div>
    )
}
