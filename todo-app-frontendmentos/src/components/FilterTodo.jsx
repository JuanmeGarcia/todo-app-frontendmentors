import React from 'react'

function FilterTodo({ filter, setFilter }) {
	return (
		<div className="filter">
			<ul className="filter__list">
				<li
					className={`filter__list-item ${
						filter === 'all' && 'filter__list-item--active'
					}`}
                    onClick={() => setFilter('all')}
				>
					All
				</li>
				<li
					className={`filter__list-item ${
						filter === 'active' && 'filter__list-item--active'
					}`}
                    onClick={() => setFilter('active')}
				>
					Active
				</li>
				<li
					className={`filter__list-item ${
						filter === 'completed' && 'filter__list-item--active'
					}`}
                    onClick={() => setFilter('completed')}
				>
					Completed
				</li>
			</ul>
		</div>
	)
}

export default FilterTodo
