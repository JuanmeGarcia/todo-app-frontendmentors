import React from 'react'
import Icon from './Icon'

function Todo({todo, toggle, removeTodo}) {
    return (
        <div className='todo'>
            <div className='todo__info'>
                <Icon check={true} todo={todo} toggle={toggle}/>
                <p className={`todo_paragraph ${todo.state && 'crossed'}`}>{todo.body}</p>
            </div>
                <Icon check={false} removeTodo={removeTodo} todo={todo}/>
        </div>
    )
}

export default Todo