import React from 'react'
import TodoInput from './TodoInput'

function Header(props) {
	return (
		<section className="header">
			<div className="header__title">
				<h1>Todo</h1>
				<p>icono</p>
			</div>
            <TodoInput 
				value={props.value}
				handleChange={props.handleChange}
				isCompleted={props.isCompleted}
				toggleIsCompleted={props.toggleIsCompleted}
				createNewTodo={props.createNewTodo}
			/>
		</section>
	)
}

export default Header
