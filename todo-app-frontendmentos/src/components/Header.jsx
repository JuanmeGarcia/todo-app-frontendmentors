import React from 'react'
import TodoInput from './TodoInput'

function Header() {
	return (
		<section className="header">
			<div className="header__title">
				<h1>Todo</h1>
				<p>icono</p>
			</div>
            <TodoInput />
		</section>
	)
}

export default Header
