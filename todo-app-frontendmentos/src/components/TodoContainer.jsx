import React from 'react'

function TodoContainer( {children} ) {
    return (
        <section className='todo-container'>
            {children}
        </section>
    )
}

export default TodoContainer