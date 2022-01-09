import React, { useEffect } from 'react'

export default function Clear_todo({ clearTodos, pending, message, removeMessage, todos }) {
    
    const _pending = () => {
        if(pending === 1 ) {
            return 'a'
        } else if(pending < 1) {
            return '0'
        }
        return pending
    }

    // const {active, showMessage} = message

    useEffect(() => {
        console.log('is it working')
        const timeout = setTimeout(() => {
            removeMessage()
        }, 3000)
        return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [todos])

    return (
        <div className='clear-todo'>
            <div className={ message.active ? `${message.showMessage} message` : 'message' }>
                You have { _pending() } pending { pending <= 1 ? 'task' : 'tasks' }
            </div>
            <button onClick={ clearTodos }>clear all</button>
        </div>
    )
}
