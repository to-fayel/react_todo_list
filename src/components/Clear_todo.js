import React from 'react'

export default function Clear_todo({ clearTodos, pending }) {
    
    const _pending = () => {
        if(pending === 1 ) {
            return 'a'
        } else if(pending < 1) {
            return '0'
        }
        return pending
    }

    return (
        <div className='clear-todo'>
            <div className="messege">
                You have { _pending() } pending { pending <= 1 ? 'task' : 'tasks' }
            </div>
            <button onClick={ clearTodos }>clear all</button>
        </div>
    )
}
