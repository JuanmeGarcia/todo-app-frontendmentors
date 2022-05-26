import React from 'react'

function Icon({todo, toggle, check, removeTodo}) {

	return check ? (
		<div
			className={`todo-check ${todo.state && 'todo-check--completed'}`}
			onClick={() => toggle(todo.id)}
		>

        </div>
	) : (
		<span className='todo-cross' onClick={() => removeTodo(todo.id)}></span>
	)
}

export default Icon
